import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import { transporter } from "../utils/mailer.js";

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

    const verificationToken = jwt.sign(
      { email },
      process.env.VERIFICATION_TOKEN_SECRET_KEY,
      { expiresIn: "30m" }
    );

    const userToBeRegistered = new User({
      name,
      email,
      password: hashedPassword,
      verificationToken,
    });

    await userToBeRegistered.save();

    userToBeRegistered.password = undefined;

    // generating verification link
    const verificationLink = `${process.env.BACKEND_DOMAIN_URL}/api/auth/verify-email/${verificationToken}`;

    const mailOptions = {
      from: process.env.SMTP_GMAIL_USER,
      to: email,
      subject: "Account Verification",
      text: `Please verify you email by clicking the following link:${verificationLink}`,
    };

    await transporter.sendMail(mailOptions);

    return res.status(201).json({
      user: userToBeRegistered,
      message: "User successfully registered, verification email sent",
    });
  } catch (error) {
    next(error);
  }
}

async function login() {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const userExists = await User.findOne({ email });

    if (!userExists) {
      return res.status(404).json({
        message: "User not found with this email",
      });
    }

    const isPasswordCorrect = bcryptjs.compareSync(
      userExists.password,
      password
    );

    if (!isPasswordCorrect) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    const accessToken = jwt.sign();
  } catch (error) {}
}

export { register, login };
