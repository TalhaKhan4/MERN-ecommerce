import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

async function verifyUser(req, res, next) {
  try {
    const authToken = req.cookies.access_token;
    console.log(req.cookies);

    // Check if token is present
    if (!authToken) {
      return res.status(401).json({
        message: "Unauthorized access! Token not present",
      });
    }

    // Verify the token and find the user
    const decodedAuthToken = jwt.verify(
      authToken,
      process.env.ACCESS_TOKEN_SECRET_KEY
    );

    const userId = decodedAuthToken._id;
    const user = await User.findById(userId);

    // Check if user exists
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // Attach user to the request object for further use
    req.user = user;

    // Proceed to the next middleware or route
    next();
  } catch (error) {
    // Handle all errors in one place
    return res.status(500).json({
      message: error.message || "An unexpected error occurred",
    });
  }
}

export { verifyUser };
