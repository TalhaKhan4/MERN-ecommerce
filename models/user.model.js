import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    // User's full name with validation for minimum and maximum length
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      lowercase: true,
      minlength: [3, "Name must be at least 3 characters long"],
      maxlength: [100, "Name cannot exceed 100 characters"],
    },

    // Unique email with proper regex validation and error messages
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/.+@.+\..+/, "Please enter a valid email address"],
    },

    // Password with minimum length validation and error message
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters long"],
    },

    // Role for differentiating between regular users and admins
    role: {
      type: String,
      enum: {
        values: ["user", "admin"],
        message: "{VALUE} is not supported as a user role",
      },
      default: "user",
    },

    // Address object for user's shipping or billing address
    address: {
      street: { type: String, trim: true },
      city: { type: String, trim: true },
      state: { type: String, trim: true },
      postalCode: {
        type: String,
        trim: true,
        maxlength: [10, "Postal code cannot exceed 10 characters"],
      },
      country: { type: String, trim: true },
    },

    // Verification for email status
    isVerified: {
      type: Boolean,
      default: false,
    },

    // Token for email verification
    verificationToken: {
      type: String,
    },
    // Refresh token for auth sessions
    refreshToken: {
      type: String,
    },

    // Password reset token
    resetPasswordToken: {
      type: String,
    },

    // Shopping cart: Array of product items with references to product schema
    cart: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],

    // Wishlist: Array of product references the user has favorited
    wishlist: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export { User };
