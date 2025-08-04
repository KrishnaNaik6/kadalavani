import express from "express";
import User from "../../../models/User.js";
import loadRoutes from "./articles.js";
import loadCategoryRoutes from "./category.js";
import loadTagRoutes from "./tag.js";

const router = express.Router();

router.get("/health", async (req, res) => {
  res.send("news Alive!");
});
// Create an article
loadRoutes(router);
loadCategoryRoutes(router);
loadTagRoutes(router);

export default router;
