import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },

  password: {
    type: String,
    required: true,
    minlength: [4, "Password should be greater than 4 characters"],
  },

  age: Number,

  role: {
    type: String,
    enum: ["ADMIN", "DRIVER", "OWNER", "USER"],
    default: "USER",
  },
},{timestamps:true});

export const User = model("User", userSchema);
