import { Category, Product } from "../models/product.model.js";
import { uploadToCloudinary } from "../config/cloudinary.config.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get the directory name from the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function createProduct(req, res, next) {
  try {
    let {
      name,
      description,
      price,
      discountedPrice,
      images,
      categories,
      isVariable,
      countInStock,
      variants,
    } = req.body;

    if (!name || !description || !price || !categories) {
      return res.status(400).json({
        message: "All product fields are required",
      });
    }

    if (!req.files) {
      return res.status(400).json({
        message: "Please upload images",
      });
    }

    const existingProduct = await Product.findOne({ name });

    if (existingProduct) {
      req.files.forEach((file) => {
        const filePath = path.join(__dirname, "../public", file.filename); // Adjust the path if necessary
        fs.unlink(filePath, (err) => {
          if (err) console.error(`Failed to delete image: ${filePath}`, err);
        });
      });
      return res.status(400).json({
        message: "Product with name is already exists",
      });
    }

    if (variants.length > 0) {
      isVariable = true;
      const stocks = variants.reduce((acc, variant) => {
        const stockValue = Number(variant.stock);
        return acc + stockValue;
      }, 0);
      countInStock = stocks;
    } else {
      // If there are no variants, set countInStock to a default value or from the request body
      countInStock = req.body.countInStock || 0;
      isVariable = false; // No variants, so not a variable product
    }

    const generateSlug = name
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/[^\w\-]+/g, "") // Remove all non-word characters
      .replace(/\-\-+/g, "-") // Replace multiple hyphens with a single hyphen
      .replace(/^-+|-+$/g, "");

    const localImagesPaths = req.files?.map((imageInfo) => {
      return imageInfo.path;
    });

    const imagesUploadedToCloudinary = await uploadToCloudinary(
      localImagesPaths
    );
    if (!imagesUploadedToCloudinary) {
      return res.status(400).json({
        message: "Error occur while uploading images please try again",
      });
    }
    const imagesUrls = imagesUploadedToCloudinary.map((image) => image.url);

    console.log(imagesUrls);
    const savedProduct = new Product({
      name,
      description,
      price,
      images,
      discountedPrice,
      countInStock,
      categories,
      isVariable,
      variants,
      images: imagesUrls,
      slug: generateSlug,
    });

    await savedProduct.save();

    return res.status(201).json({
      message: "Product created successfully",
      product: savedProduct,
    });
  } catch (error) {
    req.files.forEach((file) => {
      const filePath = path.join(__dirname, "../public", file.filename); // Adjust the path if necessary
      fs.unlink(filePath, (err) => {
        if (err) console.error(`Failed to delete image: ${filePath}`, err);
      });
    });
    next(error);
  }
}

// ...........................................................
// ...........................................................
// ...........................................................
// categories functions/controllers

async function createCategories(req, res, next) {
  const { name, parent } = req.body;

  try {
    // Create the new category
    const newCategory = new Category({ name, parent });
    await newCategory.save();

    // If there's a parent, update the parent's subCategories using $push

    if (parent) {
      await Category.updateOne(
        { _id: parent },
        { $push: { subCategories: newCategory._id } },
        { new: true }
      );
    }

    return res.status(201).json({
      category: newCategory,
    });
  } catch (error) {
    next(error);
  }
}

async function getAllCategories(req, res, next) {
  try {
    const categories = await Category.find({ parent: null }).populate({
      path: "subCategories",
      populate: {
        path: "subCategories",
      },
    });

    res.status(200).json({
      categories: categories,
      message: "Successfully get all categories",
    });
  } catch (error) {
    next(error);
  }
}

export { createProduct, createCategories, getAllCategories };
