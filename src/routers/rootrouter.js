import express from "express";
// import { dirname } from "path";
import path from "path";
import { matchInfo } from "../json/matching_info.js";

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

rootRouter.get("/waiting-room/:id", (req, res) => {
  const { id } = req.params;

  res.sendFile(__dirname + "/src/html/waiting-room.html", "matchInfo");
});
// rootRouter.get("/waiting-room/:id", (req, res) => {
//   const { id } = req.params;
//   console.log(id);
//   res.json(matchInfo);
// });

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

rootRouter.get("/create-profile", (req, res) => {
  res.sendFile(__dirname + "/src/html/create-profile.html");
});
rootRouter.post("/create-profile", (req, res) => {
  const { nickname, area, gender, experience, ntrp } = req.body;
  if (nickname && area) {
    res.redirect("/");
  }
  // console.log(req.body);
});

export default rootRouter;
