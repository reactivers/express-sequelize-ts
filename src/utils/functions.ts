import { Request } from "express";
import jwt from "jsonwebtoken";
import { IJWTToken, NODE_ENV_ENUM } from "./types";

const getTokenExpireDuration = () => 24 * 60 * 60 * 1000

export const isTest = () => getNodeEnv() === NODE_ENV_ENUM.TEST;
export const isProd = () => getNodeEnv() === NODE_ENV_ENUM.PRODUCTION;

export const getAppSecret = () => process.env.APP_SECRET!
export const getPostgresPassword = () => process.env.POSTGRES_PASSWORD!;
export const getPostgresPort = () => parseInt(`${process.env.POSTGRES_PORT!}`);
export const getPostgresHost = () => process.env.POSTGRES_HOST!;
export const getPostgresDatabase = () => process.env.POSTGRES_DATABASE!;
export const getPostgresSchema = () => process.env.POSTGRES_SCHEMA
export const getNodeEnv: () => NODE_ENV_ENUM = () => process.env.NODE_ENV! as NODE_ENV_ENUM


export const verifyJWT = (token: string): Promise<{ data: IJWTToken }> => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, getAppSecret(), (err, decodedToken) => {
            if (err || !decodedToken) {
                return reject(err)
            }
            resolve(decodedToken as { data: IJWTToken })
        })
    })
}

export const createJWToken = (data: IJWTToken) => {
    const secret = getAppSecret()
    const token = jwt.sign({ data }, getAppSecret(), {
        expiresIn: getTokenExpireDuration(),
        algorithm: 'HS256'
    })
    return token
}

export const getTokenFromRequest = (req: Request) => {
    const authorization = req.headers["authorization"] as string;
    if (!authorization) throw new Error("Invalid token");
    const token = authorization?.slice(7, authorization.length);
    if (!token) throw new Error("Invalid token");
    return token;
}

export const getErrorMessage = (error: unknown) => {
    if (error instanceof Error) return error.message
    return String(error)
}