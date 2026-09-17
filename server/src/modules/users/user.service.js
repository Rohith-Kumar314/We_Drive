import * as userRepository from "./user.repository.js";
import { AppError } from "../../utils/appError.js";

export async function getAllUsers() {
  const users = await userRepository.findAllUsers();

  if (!users) throw AppError(500, "Unable to fetch Users");

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
    throw AppError(404, "User already exists");
  }
  // const newUser = await userRepository.createNewUser(ne)
}
