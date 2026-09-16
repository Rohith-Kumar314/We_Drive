import { Router } from "express";
//utils
import { wrapAsync } from "../../utils/wrapAsync";

// Controllers
import * as userController from "./user.controller";

export const userRouter = Router();

userRouter.get("/", wrapAsync(userController.getAllUsers)); //get all users
userRouter.get("/me", wrapAsync(userController.getCurrentUser())); // get information about currently logged in user

userRouter.patch("/me", wrapAsync(userController.updateUser)); //update the logged in user information.
userRouter.get("/:id", wrapAsync(userController.getUser)); // get a purticular user.
userRouter.patch("/:id", wrapAsync(userController.updateUser)); //update other user information by admin.
userRouter.delete("/:id", wrapAsync(userController.deleteUser)); //delete a user by admin login,