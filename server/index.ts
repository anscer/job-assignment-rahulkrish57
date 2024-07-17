import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import dotenv from "dotenv";
import passport from 'passport';
import cors from "cors";
const port = process.env.PORT || 4000;
import database from "./database";
import stateRoutes from "./route/state.route";
import authRoutes from "./route/auth.route";

dotenv.config();
const app = express();
// Middleware
app.use(cors());

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(passport.initialize());
// Connect to Database
database();
// Health Check Route
app.get("/", (req, res) => {
  res.status(200).json({ status: "Home Page API UP" });
});
app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP" });
});
// Routes
app.use("/api/v1", stateRoutes);
app.use("/api/auth", authRoutes);

// Error Handling
app.use((req: Request, res: Response, next: NextFunction) => {
  const error = new Error("Not Found");
  (error as any).status = 404;
  next(error);
});

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

// Start Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
