import express from "express";
import { PrismaClient } from "@prisma/client";
const router = express.Router();

// Import your Prisma client here
const prisma = new PrismaClient();

// Create a new user
router.post("", async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      middle_name,
      email,
      phone,
      password,
      role_id,
      status,
    } = req.body;
    const user = await prisma.users.create({
      data: {
        first_name,
        last_name,
        middle_name,
        email,
        phone,
        password,
        role_id,
        status,
      },
    });
    res.json(user);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Unable to create user" });
  }
});

// Retrieve a list of users
router.get("", async (req, res) => {
  try {
    const users = await prisma.users.findMany();
    res.json(users);
  } catch (error) {
    console.error("Error retrieving users:", error);
    res.status(500).json({ error: "Unable to retrieve users" });
  }
});

// Retrieve a single user by ID
router.get("/:id", async (req, res) => {
  const userId = parseInt(req.params.id);
  try {
    const user = await prisma.users.findUnique({
      where: {
        id: userId,
      },
    });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error retrieving user:", error);
    res.status(500).json({ error: "Unable to retrieve user" });
  }
});

// Update a user by ID
router.put("/:id", async (req, res) => {
  const userId = parseInt(req.params.id);
  try {
    const { username, email, phone, roleId, status } = req.body;
    const updatedUser = await prisma.users.update({
      where: {
        id: userId,
      },
      data: {
        username,
        email,
        phone,
        roleId,
        status,
      },
    });
    res.json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Unable to update user" });
  }
});

// Delete a user by ID
router.delete("/:id", async (req, res) => {
  const userId = parseInt(req.params.id);
  try {
    await prisma.users.delete({
      where: {
        id: userId,
      },
    });
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Unable to delete user" });
  }
});

export default router;
