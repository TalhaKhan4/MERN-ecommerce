import express from "express";
import {
  createProduct,
  createCategories,
  getAllCategories,
} from "../controllers/product.controllers.js";
import { uploadFileUsingMulter } from "../middlwares/multerMiddleware.js";

const router = express.Router();

// product routes
router.post(
  "/create",
  uploadFileUsingMulter.array("images", 10),
  createProduct
);

// categories routes
router.post("/create-categories", createCategories);
router.get("/categories", getAllCategories);

export default router;
