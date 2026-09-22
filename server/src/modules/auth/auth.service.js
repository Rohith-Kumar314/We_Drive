import { AppError } from "../../utils/appError.js";
import { signAccessToken } from "../../utils/tokens.js";
import { User } from "../users/user.model";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || password) throw AppError(400, "Bad Request");

  const user = User.find({ email });
  if (!user) throw AppError(404, "Invalid email or password");

  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) throw AppError(401, "Invalid email or password");

  const accessToken = signAccessToken({id: user._id, username: user.username, role: user.role});
};