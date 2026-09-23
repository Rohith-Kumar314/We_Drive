import jwt from "jsonwebtoken";

import { AppError } from "../utils/appError";

export function authenticate(req, res, next) {
  const cookie = req.cookies?.accessToken;

  if (!token) next(new AppError(401, "Access Token Missing"));
  try {
    const payload = jwt.verify(cookie);
    req.user = payload;
    console.log(payload);
    next();
  } catch (err) {
    next(err);
  }
}
