import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

// Get all articles
router.get("/articles", async (req, res) => {
  try {
    const articles = await prisma.articles.findMany();
    res.json(articles);
  } catch (error) {
    console.error("Error retrieving articles:", error);
    res.status(500).json({ error: "Could not retrieve articles." });
  }
});

// Create a new article
router.post("/articles", async (req, res) => {
  const {
    title,
    content,
    author,
    publicationDate,
    status,
    tags,
    article_type_id,
    latitude,
    longitude,
    city,
    district,
    state,
    pinCode,
    country,
    taluk,
  } = req.body;

  try {
    const newArticle = await prisma.articles.create({
      data: {
        title,
        content,
        author,
        publicationDate,
        status,
        tags: { set: tags },
        article_type_id,
        latitude,
        longitude,
        city,
        district,
        state,
        pinCode,
        country,
        taluk,
      },
    });

    res.json(newArticle);
  } catch (error) {
    console.error("Error creating article:", error);
    res.status(500).json({ error: "Could not create the article." });
  }
});

// Update an existing article
router.put("/articles/:id", async (req, res) => {
  const { id } = req.params;
  const {
    title,
    content,
    author,
    publicationDate,
    status,
    tags,
    article_type_id,
    latitude,
    longitude,
    city,
    district,
    state,
    pinCode,
    country,
    taluk,
  } = req.body;

  try {
    const updatedArticle = await prisma.articles.update({
      where: { id: parseInt(id) },
      data: {
        title,
        content,
        author,
        publicationDate,
        status,
        tags: { set: tags },
        article_type_id,
        latitude,
        longitude,
        city,
        district,
        state,
        pinCode,
        country,
        taluk,
      },
    });

    res.json(updatedArticle);
  } catch (error) {
    console.error("Error updating article:", error);
    res.status(500).json({ error: "Could not update the article." });
  }
});

// Delete an article
router.delete("/articles/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.articles.delete({
      where: { id: parseInt(id) },
    });

    res.json({ message: "Article deleted successfully." });
  } catch (error) {
    console.error("Error deleting article:", error);
    res.status(500).json({ error: "Could not delete the article." });
  }
});

export default router;
