import express from "express";
const router = express.Router();

import { authLogin } from "../Controller/auth.js";

router.post("/", authLogin);

export default router;
