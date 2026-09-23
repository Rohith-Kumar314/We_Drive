import { AppError } from "../../utils/appError.js";
import { loginService } from "./auth.service.js";

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new AppError(400, "Email and password are required");
  }

  const { user, accessToken } = await loginService(
    email,
    password
  );

  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  });

  res.status(200).json({
    success: true,
    message: "Logged in Successfully",
    data: user,
  });
};

export const logout = async (req, res) => {
  const result = await logoutService();

  res.clearCookie("accessToken");

  res.status(200).json({
    success: true,
    message: result.message,
    data:[],
  });
};