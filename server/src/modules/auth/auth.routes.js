import { Router } from "express";
import * as authController from "./auth.controller.js";
import { wrapAsync } from "../../utils/wrapAsync.js";
import { validateRegistrationDetails } from "../users/user.validator.js";

export const authRouter = Router();

authRouter.post(
  "/register",
  validateRegistrationDetails,
  wrapAsync(authController.register),
);

authRouter.post("/login", wrapAsync(authController.login));
authRouter.post("/logout", wrapAsync(authController.logout));
