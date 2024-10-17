import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";

async function register(req, res, next) {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const isUserAlreadyExists = await User.findOne({ email });
    if (isUserAlreadyExists) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = bcryptjs.hashSync(password, 12);

    const userToBeRegistered = new User({
      name,
      email,
      password: hashedPassword,
    });

    await userToBeRegistered.save();

    userToBeRegistered.password = undefined;

    return res.status(201).json({
      user: userToBeRegistered,
      message: "User successfully registered",
    });
  } catch (error) {
    next(error);
  }
}

export { register };
