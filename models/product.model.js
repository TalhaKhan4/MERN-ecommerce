import mongoose from "mongoose";
// Review Schema
const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Assuming you have a User model
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

// Variant Schema for Variable Products
const variantSchema = new mongoose.Schema({
  size: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
    default: 0,
  },
});

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    parent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category", // Reference to the same Category model for parent-child relationship
      default: null, // Null indicates that this is a top-level category
    },
    subCategories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category", // Reference to subcategories
      },
    ],
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", categorySchema);

// Main Product Schema
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: [true, "Product description is required"],
      trim: true,
    },
    slug: {
      type: String,
      trim: true,
      required: [true, "Product slug is required"],
      unique: true,
    },
    price: {
      type: Number,
      required: [true, "Product Price is required"],
    },
    discountedPrice: {
      type: Number,
      default: null, // Can be null if there is no discount
    },
    images: {
      type: [String], // Array of image URLs
      required: [true, "Product images is required"],
    },
    numReviews: {
      type: Number,
      default: 0,
    },
    sold: {
      type: Number,
      default: 0,
    },
    rating: {
      type: Number,
      default: 0,
    },
    countInStock: {
      type: Number,
      default: 1,
    },
    categories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category", // Linking to Category schema
        required: [true, "Product categories is required"],
      },
    ],
    reviews: [reviewSchema], // Array of user reviews
    isVariable: {
      type: Boolean,
      default: false, // Indicates if the product has variants
    },
    variants: [variantSchema], // Array of product variants for variable products
    // brand:{

    // }
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export { Product, Category };
