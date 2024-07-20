import { Router } from "express";
import { authController, authSignup } from "../controller/auth.controller.js";

const authRouter = Router();

authRouter.get("/auth", authController);
authRouter.get("/auth/signup", authSignup);

export default authRouter;
