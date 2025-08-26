// routes/tasks.js
import express from "express";
import Task from "../models/task.js";

const router = express.Router();

// GET all tasks
router.get("/", async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
});

// POST create new task
router.post("/", async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
});

// PUT toggle completed
router.put("/:id/completed", async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (!task) return res.status(404).json({ error: "Task not found" });

  task.completed = !task.completed;
  await task.save();
  res.json(task);
});

// DELETE task
router.delete("/:id", async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (!task) return res.status(404).json({ error: "Task not found" });

  await task.destroy();
  res.status(204).send();
});

export default router;