import express from "express";
import cors from "cors";
import userRoute from "./controllers/users.js";
import roleRoute from "./controllers/roles.js";
import articleTypeRoute from "./controllers/article_type.js";
import bodyParser from "body-parser";
const app = express();
const port = 3005;

app.use(cors());
app.use(bodyParser.json()); // Parse JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded data

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/users", userRoute);
app.use("/roles", roleRoute);
app.use("/article-types", articleTypeRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
