import express from "express";
import { PrismaClient } from "@prisma/client";
const router = express.Router();

const prisma = new PrismaClient();

// Create a new role
router.post("", async (req, res) => {
  try {
    const { name, status } = req.body;
    const role = await prisma.roles.create({
      data: {
        name,
        status,
      },
    });
    res.json(role);
  } catch (error) {
    console.error("Error creating role:", error);
    res.status(500).json({ error: "Unable to create role" });
  }
});

// Retrieve a list of roles
router.get("", async (req, res) => {
  try {
    const roles = await prisma.roles.findMany();
    res.json(roles);
  } catch (error) {
    console.error("Error retrieving roles:", error);
    res.status(500).json({ error: "Unable to retrieve roles" });
  }
});

// Retrieve a single role by ID
router.get("/:id", async (req, res) => {
  const roleId = parseInt(req.params.id);
  try {
    const role = await prisma.roles.findUnique({
      where: {
        id: roleId,
      },
    });
    if (role) {
      res.json(role);
    } else {
      res.status(404).json({ error: "Role not found" });
    }
  } catch (error) {
    console.error("Error retrieving role:", error);
    res.status(500).json({ error: "Unable to retrieve role" });
  }
});

// Update a role by ID
router.put("/:id", async (req, res) => {
  const roleId = parseInt(req.params.id);
  try {
    const { name, status } = req.body;
    const updatedRole = await prisma.roles.update({
      where: {
        id: roleId,
      },
      data: {
        name,
        status,
      },
    });
    res.json(updatedRole);
  } catch (error) {
    console.error("Error updating role:", error);
    res.status(500).json({ error: "Unable to update role" });
  }
});

// Delete a role by ID
router.delete("/:id", async (req, res) => {
  const roleId = parseInt(req.params.id);
  try {
    await prisma.roles.delete({
      where: {
        id: roleId,
      },
    });
    res.json({ message: "Role deleted successfully" });
  } catch (error) {
    console.error("Error deleting role:", error);
    res.status(500).json({ error: "Unable to delete role" });
  }
});

// Don't forget to close the Prisma client when done

export default router;
