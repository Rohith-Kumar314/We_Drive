// module imports
import express from "express";
import { config } from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import cookieParser from "cookie-parser";

//routers
import { authRouter } from "./src/modules/auth/auth.routes.js";
import { userRouter } from "./src/modules/users/user.routes.js";

//utils & middlewares
import { AppError } from "./src/utils/appError.js";

config();
const app = express();

//configurations
const PORT = process.env.PORT || 4000;
const DBURL = process.env.DBURL || "mongodb://127.0.0.1:27017/myDatabase";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev")); // it is used to log the incoming requests to the server.

// Routing configs.,
app.use("/auth", authRouter);
app.use("/users",userRouter);

app.get("/health", (req, res) => {
  console.log("Hit Health check url");

  res.status(200).json({
    success: true,
    message: "UP",
  });
});

// Add custom error handling middleware

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res.status(400).json({
      success: false,
      message: "Invalid JSON in request body",
      data: [],
    });
  }

  // Your existing AppError handling
  if (err instanceof AppError || err.name === "AppError") {
    return res.status(err.statusCode || 500).json({
      success: false,
      message: err.message,
      data: [],
    });
  }

  if (err.name === "ZodError") {
    return res.status(400).json({
      success: false,
      message: err.issues[0].message,
      errors: err.issues, // return the actual errors
    });
  }

  console.log("ERROR STACK: ", err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Something Went Wrong",
    data: [],
  });
});

async function connectDBAndServer() {
  try {
    await mongoose.connect(DBURL);
    console.log("DB Connected Successfully");
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.log("ERROR : ", err);
  }
}

connectDBAndServer();
