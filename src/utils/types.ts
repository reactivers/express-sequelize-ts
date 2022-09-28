import type { Express } from "express";

export enum NODE_ENV_ENUM {
    DEVELOPMENT = "development",
    PRODUCTION = "production",
    TEST = "test"
}

export interface IAppRoute {
    public: (app: Express) => void;
    private: (app: Express) => void;
}

export interface IUser {
    username: string;
    firstname: string;
    lastname: string;
    password?: string
}

export interface IJWTToken {
    user: IUser
}

export interface ISignUpInput extends IUser {
    password: string;
}

export interface ILoginInput extends Omit<IUser, "firstname" | "lastname"> {
    username: string;
    password: string;
}