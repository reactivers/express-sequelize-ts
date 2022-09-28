import type { NextFunction, Request, Response } from 'express';
import { getUserByRequest } from '../functions/user';

const verifyAuthorization = async (req: Request, res: Response, next: NextFunction) => {
    const isOptionRequest = req.method === "OPTIONS";
    if (!isOptionRequest) {
        try {
            await getUserByRequest(req)
            next();
        } catch (error) {
            console.log("Invalid auth token", error)
            return res.status(403).send({ message: "Invalid auth token provided.", error })
        }
    } else {
        next()
    }
}

export default verifyAuthorization