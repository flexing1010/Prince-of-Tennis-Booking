import express from "express";
import rootRouter from "./routers/rootrouter.js";

const app = express();

app.listen(5000, () => {
  console.log(`✅ Server listening on port http://localhost:5000🚀`);
});

// app.set("views",__dirname +)

app.use("/", rootRouter);
