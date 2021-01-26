import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import pageRoutes from "./routes/pageRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import workRoutes from "./routes/workRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import path from "path";
import morgan from "morgan";

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send("Api Start Working");
});

app.use("/api/users", userRoutes);
app.use("/api/page", pageRoutes);
app.use("/api/work", workRoutes);
app.use("/api/upload", uploadRoutes);

const __dirname = path.resolve();

app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
app.use(notFound);

app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(
  5000,
  console.log(
    `Server  Running as ${process.env.NODE_ENV} Environment  on  Port ${port}`
  )
);
