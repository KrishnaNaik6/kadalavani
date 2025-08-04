import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

// Get all article types
router.get("", async (req, res) => {
  try {
    const articleTypes = await prisma.article_types.findMany();
    res.json(articleTypes);
  } catch (error) {
    console.error("Error retrieving article types:", error);
    res.status(500).json({ error: "Could not retrieve article types." });
  }
});

// Create a new article type
router.post("", async (req, res) => {
  const { name, description } = req.body;

  try {
    const newArticleType = await prisma.article_types.create({
      data: {
        name,
        description,
      },
    });

    res.json(newArticleType);
  } catch (error) {
    console.error("Error creating article type:", error);
    res.status(500).json({ error: "Could not create the article type." });
  }
});

// Update an existing article type
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;

  try {
    const updatedArticleType = await prisma.article_types.update({
      where: { id: parseInt(id) },
      data: {
        name,
        description,
      },
    });

    res.json(updatedArticleType);
  } catch (error) {
    console.error("Error updating article type:", error);
    res.status(500).json({ error: "Could not update the article type." });
  }
});

// Delete an article type
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.article_types.delete({
      where: { id: parseInt(id) },
    });

    res.json({ message: "Article type deleted successfully." });
  } catch (error) {
    console.error("Error deleting article type:", error);
    res.status(500).json({ error: "Could not delete the article type." });
  }
});

export default router;
