import express from "express";
import { dirname } from "path";
import path from "path";

const __dirname = path.resolve();

const rootRouter = express.Router();

// rootRouter.get("/", home);

rootRouter.get("/", (req, res) => {
  //   res.send("hi");
  res.sendFile(__dirname + "/client/html/index.html");
});

export default rootRouter;
