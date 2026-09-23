import { User } from "./user.model.js";

export async function findUserByEmail(email) {
  return User.findOne({ email });
}

export async function findAllUsers(){
    return User.find({});
}

export async function findUserById(id) {
  return User.findById(id);
}

export async function createNewUser(data) {
  return User.create(data);
}

export async function updateById(id, data) {
  return User.findByIdAndUpdate(id, data, { returnDocument: "after" });
}

export async function deleteUserById(id){
    return User.findByIdAndDelete(id);
}