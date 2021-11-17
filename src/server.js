import bodyParser from "body-parser";
import express from "express";
import rootRouter from "./routers/rootrouter.js";

const app = express();

app.listen(5000, () => {
  console.log(`✅ Server listening on port http://localhost:5000🚀`);
});

// app.set("views",__dirname +)

app.use(express.static("src"));
app.use(express.urlencoded({ extended: false }));
// app.use(
//   bodyParser.urlencoded({
//     extended: false,
//   })
// );
app.use(express.json());
app.use("/", rootRouter);
