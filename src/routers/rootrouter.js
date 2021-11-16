import express from "express";
import { dirname } from "path";
import path from "path";

const __dirname = path.resolve();

const rootRouter = express.Router();

// rootRouter.get("/", home);

rootRouter.get("/", (req, res) => {
  // res.send("hi");
  res.sendFile(__dirname + "/src/html/index.html");
});

rootRouter.get("/matching", (req, res) => {
  res.sendFile(__dirname + "/src/html/matching.html");
});
rootRouter.get("/matching/match-making", (req, res) => {
  res.sendFile(__dirname + "/src/html/match-making.html");
});

rootRouter.get("/login", (req, res) => {
  res.sendFile(__dirname + "/src/html/login.html");
});
rootRouter.get("/court", (req, res) => {
  res.sendFile(__dirname + "/src/html/court.html");
});
rootRouter.get("/register", (req, res) => {
  res.sendFile(__dirname + "/src/html/register.html");
});
rootRouter.get("/register/complete", (req, res) => {
  res.sendFile(__dirname + "/src/html/register-complete.html");
});

export default rootRouter;
