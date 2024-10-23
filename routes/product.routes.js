import express from "express";
import {
  createProduct,
  createCategories,
} from "../controllers/product.controllers.js";

const router = express.Router();

router.post("/create", createProduct);
router.post("/create-categories", createCategories);

export default router;
