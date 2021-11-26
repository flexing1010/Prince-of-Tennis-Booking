import express from "express";
// import { dirname } from "path";
import path from "path";
import { matchInfo } from "../json/matching_info.js";
import { users } from "../json/user.js";

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

// rootRouter.get("/waiting-room/:id", (req, res) => {
rootRouter.get("/waiting-room/:id", (req, res) => {
  res.sendFile(__dirname + "/src/html/waiting-room.html");
});
rootRouter.get("/waiting-room/:id/info", (req, res) => {
  const { id } = req.params;
  const targetMatch = matchInfo.find(
    (element) => element.matchId === parseInt(id)
  );

  res.json(targetMatch);
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

rootRouter.post("/login", (req, res) => {
  const loginUser = req.body;
  console.log(loginUser);
  const user = users.find((user) => {
    return user.username === loginUser.username;
  });

  if (user && user.password === loginUser.password) {
    console.log("환영합니다!!");
    // return res.redirect("/");
    res.send({ message: "환영합니다!!" });
  } else {
    res.send({ message: "아이디/비밀번호가 잘못되었습니다" });
    console.log("아이디/비밀번호가 잘못되었습니다");
  }
});

export default rootRouter;
