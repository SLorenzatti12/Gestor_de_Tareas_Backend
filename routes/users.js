// routes/users.js
import express from "express";
import User from "../models/user.js";

const router = express.Router();

// POST create user
router.post("/", async (req, res) => {
  try {
    const { name, score } = req.body;

    // Creamos el usuario en la DB
    const newUser = await User.create({ name, score: score || 0 });

    res.status(201).json({ message: "Usuario creado", data: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear usuario" });
  }
});

// GET all users
router.get("/", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

// GET user score
router.get("/:id/score", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });

  res.json({ user: user.name, score: user.score });
});

// PUT update user score
router.put("/:id/score", async (req, res) => {
  const { score } = req.body;
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });

  user.score = score;
  await user.save();

  res.json({ user: user.name, score: user.score });
});

export default router;