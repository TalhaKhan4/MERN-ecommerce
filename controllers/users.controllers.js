import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";

async function getAllUsers(req, res, next) {
  try {
    const users = await User.find();

    if (!users || users.length === 0) {
      return res.status(404).json({
        message: "No user found",
      });
    }
    return res.status(200).json({
      users: users,
      usersLength: users.length,
      message: "All users retrieved successfully",
    });
  } catch (error) {
    next(error);
  }
}

async function getSingleUser(req, res, next) {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "No user found",
      });
    }
    return res.status(200).json({
      user: user,

      message: "Single users retrieved successfully",
    });
  } catch (error) {
    next(error);
  }
}

async function updateUser(req, res, next) {
  try {
    const userId = req.user._id;
    // const { userId } = req.params;
    const { name, password, address } = req.body;

    // Update fields only if they are provided
    const updates = {};
    if (name) updates.name = name;
    if (password) {
      const hashedPassword = bcryptjs.hashSync(password, 12);
      updates.password = hashedPassword;
    }
    if (address) {
      updates.address = {};
      if (address.street) updates.address.street = address.street;
      if (address.city) updates.address.city = address.city;
      if (address.state) updates.address.state = address.state;
      if (address.postalCode) updates.address.postalCode = address.postalCode;
      if (address.country) updates.address.country = address.country;
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $set: updates,
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found with this ID",
      });
    }

    return res.status(200).json({
      user: updatedUser,
      message: "User updated successfully",
    });
  } catch (error) {
    next(error);
  }
}
async function deleteUser(req, res, next) {
  try {
    const userId = req.user._id;
    if (!userId) {
      return res.status(400).json({
        message: "User id is required",
      });
    }

    const userToBeDeleted = await User.findByIdAndDelete(userId);

    return res.status(200).json({
      message: `User ${userToBeDeleted.name} is successfully deleted`,
    });
  } catch (error) {
    next(error);
  }
}
async function logOut(req, res, next) {
  try {
    // Clear the auth token cookie
    res.clearCookie("access_token", {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    });

    return res.status(200).json({
      message: "Logged out successfully",
    });
  } catch (error) {
    next(error);
  }
}
export { getAllUsers, updateUser, deleteUser, logOut, getSingleUser };
