import bcrypt from "bcrypt";
import { User } from "../users/user.model.js";
import { AppError } from "../../utils/appError.js";
import { signAccessToken } from "../../utils/tokens.js";

export const loginService = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new AppError(401, "Invalid email or password");
  }

  const isPasswordMatch = await bcrypt.compare(
    password,
    user.password
  );

  if (!isPasswordMatch) {
    throw new AppError(401, "Invalid email or password");
  }

  const userObj = user.toObject();
  delete userObj.password;

  const accessToken = signAccessToken({
    id: user._id,
    username: user.username,
    role: user.role,
  });

  return {
    user: userObj,
    accessToken,
  };
};

export const logoutService = async () => {
  return {
    message: "Logged out successfully",
  };
};