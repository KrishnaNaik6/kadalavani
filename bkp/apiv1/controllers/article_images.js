import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

// Get all article images
router.get("", async (req, res) => {
  try {
    const articleImages = await prisma.article_images.findMany();
    res.json(articleImages);
  } catch (error) {
    console.error("Error retrieving article images:", error);
    res.status(500).json({ error: "Could not retrieve article images." });
  }
});

// Create a new article image
router.post("", async (req, res) => {
  const { url, altText, article_id } = req.body;

  try {
    const newArticleImage = await prisma.article_images.create({
      data: {
        url,
        altText,
        article_id,
      },
    });

    res.json(newArticleImage);
  } catch (error) {
    console.error("Error creating article image:", error);
    res.status(500).json({ error: "Could not create the article image." });
  }
});

// Update an existing article image
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { url, altText, article_id } = req.body;

  try {
    const updatedArticleImage = await prisma.article_images.update({
      where: { id: parseInt(id) },
      data: {
        url,
        altText,
        article_id,
      },
    });

    res.json(updatedArticleImage);
  } catch (error) {
    console.error("Error updating article image:", error);
    res.status(500).json({ error: "Could not update the article image." });
  }
});

// Delete an article image
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.article_images.delete({
      where: { id: parseInt(id) },
    });

    res.json({ message: "Article image deleted successfully." });
  } catch (error) {
    console.error("Error deleting article image:", error);
    res.status(500).json({ error: "Could not delete the article image." });
  }
});

export default router;
