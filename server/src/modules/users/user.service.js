import * as userRepository from "./user.repository.js";
import { AppError } from "../../utils/appError.js";
import { hash } from "bcrypt";

export async function getAllUsers() {
  const users = await userRepository.findAllUsers();

  if (!users) throw new AppError(500, "Unable to fetch Users");

  console.log("All Users are: ", users);
  //other business logic needs to be applied here
  return users;
}

export async function getCurrentUser(id) {
  const currUser = await userRepository.findUserById(id);
  return currUser;
}

export async function createNewUser(newUserObject) {
  const user = await userRepository.findUserByEmail(newUserObject.email);
  if (user) {
    throw new AppError(409, "User already exists");
  }

  newUserObject.password = await hash(newUserObject.password, 10);
  const newUser = await userRepository.createNewUser(newUserObject);
  const {password, ...userWithoutPassword} = newUser.toObject();
  return userWithoutPassword;
}
