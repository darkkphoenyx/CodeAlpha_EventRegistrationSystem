import { Request, RequestHandler, Response } from "express";

export const authController = (req:Request, res:Response) => {
  return res.json({ msg: "nishan don dada" });
};

export const authSignup = (req:Request, res:Response) => {
    return res.json({ msg:"signed up successfully."})
}