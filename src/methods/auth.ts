import type { Request, Response } from "express";
import {
  getUserByPassword,
  getUserByRequest,
  insertUser,
} from "../functions/user";
import { createJWToken, getErrorMessage } from "../utils/functions";

export const signup = async (req: Request, res: Response) => {
  try {
    const { username, password, firstname, lastname } = req.body;
    const user = await insertUser({ username, password, firstname, lastname });
    return res.status(200).send(user);
  } catch (error) {
    return res.status(400).send({
      message: getErrorMessage(error),
      error,
    });
  }
};

export const get = async (req: Request, res: Response) => {
  try {
    const user = await getUserByRequest(req);
    return res.status(200).send(user);
  } catch (error) {
    console.log("Invalid auth token", error);
    return res
      .status(403)
      .send({ message: "Invalid auth token provided.", error });
  }
};

export const signout = async (req: Request, res: Response) => {
  console.log("*** logout ***");
  res.status(201).send({ message: "Success" });
};

export const signin = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = await getUserByPassword({ username, password });
    const token = createJWToken({ user });
    return res.status(200).send({ token, ...user });
  } catch (error) {
    return res.status(400).send({
      message: "Username or password is incorrect!",
      error,
    });
  }
};
