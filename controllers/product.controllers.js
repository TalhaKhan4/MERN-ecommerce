import { Category, Product } from "../models/product.model.js";

async function createProduct(req, res, next) {
  try {
    const {
      name,
      description,
      price,
      images,
      discountedPrice,
      countInStock,
      categories,
      isVariable,
    } = req.body;
    if (
      !name ||
      !description ||
      !price ||
      !images ||
      !discountedPrice ||
      !countInStock ||
      !categories
    ) {
      return res.status(400).json({
        message: "All product fields are required",
      });
    }

    const savedProduct = new Product({
      name,
      description,
      price,
      images,
      discountedPrice,
      countInStock,
      categories,
      isVariable,
    });

    await savedProduct.save();

    return res.status(201).json({
      message: "Product created successfully",
      product: savedProduct,
    });
  } catch (error) {
    next(error);
  }
}
// 67194efb2b487912c72d4c06 men
// 67194f302b487912c72d4c0c  men topwear
// 67194f592b487912c72d4c0e  men bottomwear
// 67194f6a2b487912c72d4c10 men footwear

//  67194f022b487912c72d4c08 women
//  67194fd7db54f096eb172d50 women topwear
// 67194feedb54f096eb172d52 women bottomwaer
// 67194fbd7a6bd9a02cbafa47 women footwear
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
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while creating the category",
      error: error.message,
    });
  }
}

export { createProduct, createCategories };
