import express from "express";
import { config } from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";


config();
const app = express();

//configurations
const PORT = process.env.PORT || 4000;
const DBURL = process.env.DBURL || "mongodb://127.0.0.1:27017/myDatabase";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev")); // it is used to log the incoming requests to the server.

app.get("/health", (req,res)=>{
    console.log("Hit Health check url");

    res.status(200).json({
        success: true,
        message: "UP",
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
