import express from "express";
import { dashboard, login } from "../controllers/main.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.get("/dashboard", authMiddleware, dashboard);
router.post("/login", login);
// router.route("/").get(dashboard);
// router.route("/").post(login);

export default router;
