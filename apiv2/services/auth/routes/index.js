import express from "express";
const router = express.Router();
import User from "../../../models/User.js";
router.get("/health", async (req, res) => {
  res.send(await User.findById(1));
  //   res.send("Auth Alive!");
});

export default router;
