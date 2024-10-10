import express from "express";
import {
  getAllProducts,
  getAllProductsStatic,
} from "../controllers/products.js";

const router = express.Router();

// router.route("/").get(getAllProducts);
router.get("/", getAllProducts);
router.get("/static", getAllProductsStatic);

export default router;
