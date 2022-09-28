import type { Request } from "express";
import Users from "../tables/user";
import { getTokenFromRequest, verifyJWT } from "../utils/functions";
import { ILoginInput, ISignUpInput, IUser } from "../utils/types";

export const insertUser: (params: ISignUpInput) => Promise<IUser> = async ({
    username,
    password,
    firstname,
    lastname
}) => {
    const obj = await Users.create({
        username,
        password,
        firstname,
        lastname
    })
    if (!obj) throw new Error("User couldn't create!");
    const user = obj.get();
    delete user["password"];
    return user;
}

export const getUserByPassword: (params: ILoginInput) => Promise<IUser> = async ({ username, password }) => {
    const obj = await Users.findOne({
        where: {
            username,
            password
        },
        attributes: {
            exclude: ["password"]
        }
    })
    if (!obj) throw Error("User couldn't found!");
    return obj.get();
}

export const getUserByUsername: (username: string) => Promise<IUser> = async (username: string) => {
    const obj = await Users.findOne({
        where: {
            username
        },
        attributes: {
            exclude: ["password"]
        }
    })
    if (!obj) throw Error("User couldn't found!");
    return obj.get()
}

export const findUserByToken: (token: string) => Promise<IUser> = async (token: string) => {
    if (!token) throw new Error("Invalid token");
    const decodedToken = await verifyJWT(token)
    const user = await getUserByUsername(decodedToken.data.user.username)
    return user;
}

export const getUserByRequest: (request: Request) => Promise<IUser> = async (request) => {
    const token = getTokenFromRequest(request);
    const user = await findUserByToken(token)
    return user;
}