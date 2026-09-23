import mongoose from "mongoose";
import { AppError } from "../utils/appError.js"; // adjust path if needed

export function validateObjectId(req, res, next) {
  if (!mongoose.isValidObjectId(req.params.id)) {
    return next(new AppError(400, "Invalid ObjectId"));
  }
  next();
}