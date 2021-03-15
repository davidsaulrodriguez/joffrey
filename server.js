import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import compression from "compression";
import router from "./routes/api.js";
dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();

app.use(morgan("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/joffrey",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);

// routes
app.use(router);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
