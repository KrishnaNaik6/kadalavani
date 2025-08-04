import "dotenv/config";
import express from "express";
import cors from "cors";
import winston from "winston";
import path from "path";
import bodyParser from "body-parser";
import logger from "./config/logger.js";
import upload from "./config/multer.js";
import Auth from "./services/auth/index.js";
import News from "./services/news/index.js";

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT;
app.use(cors());
if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

app.get("/upload", upload.array("images", 5), async (req, res, next) => {
  const { title, content } = req.body;

  const images = req.files.map((file) => file.path);
  console.log(images);
  res.status(200).send(images);
});

app.get("/", (req, res, next) => {
  console.log("debug", "Hello, Winston!");
  console.log("The is the home '/' route.");
  res.status(200).send("Logging Hello World..");
});

app.get("/event", (req, res, next) => {
  try {
    throw new Error("Not User!");
  } catch (error) {
    // logger.error("Events Error: Unauthenticated user");
    logger.error({
      message: "Error test",
      additional: "properties",
      are: "passed along",
      service: "main-service",
    });

    res.status(500).send("Error!");
  }
});

Auth.load(app);
News.load(app);
app.listen(PORT, () => {
  console.log(`Server Listening On Port ${PORT}`);
});
