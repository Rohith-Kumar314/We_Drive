import { Router } from "express";
//utils
import { wrapAsync } from "../../utils/wrapAsync.js";

// Controllers
import * as userController from "./user.controller.js";
import { validateRegistrationDetails } from "./user.validator.js";
import { validateObjectId } from "../../middlewares/validateObjectId.js";

export const userRouter = Router();

userRouter.get("/", wrapAsync(userController.getAllUsers)); //get all users
userRouter.get("/me", wrapAsync(userController.getUser)); // get information about currently logged in user
userRouter.post(
  "/",
  validateRegistrationDetails,
  wrapAsync(userController.createUser),
);

userRouter.patch("/me", wrapAsync(userController.updateUser)); //update the logged in user information.
userRouter.get("/:id", validateObjectId ,wrapAsync(userController.getCurrentUser)); // get a purticular user.
userRouter.patch("/:id",validateObjectId, wrapAsync(userController.updateUser)); //update other user information by admin.
userRouter.delete("/:id",validateObjectId, wrapAsync(userController.deleteUser)); //delete a user by admin login,