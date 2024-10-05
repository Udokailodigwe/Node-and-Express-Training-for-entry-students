import express from "express";
import {
  createTask,
  deleteTask,
  getAllTasks,
  getTask,
  updateTask,
} from "../controllers/tasks.js";
const router = express.Router();

//endpoints
// app.get("/api/v1/tasks")   -get all tasks
// app.post("/api/v1/tasks")   -create a task
// app.get("/api/v1/tasks/:id")   -get one task
// app.patch("/api/v1/tasks/:id")   -update a task
// app.delete("/api/v1/tasks/:id")   -delete a task

router.get("/", getAllTasks);
router.post("/", createTask);
router.get("/:id", getTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
