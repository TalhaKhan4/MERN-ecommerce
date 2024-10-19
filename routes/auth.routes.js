import express from "express";
import {
  login,
  register,
  requestResetPassword,
  resetPassword,
  verifyEmail,
} from "../controllers/auth.controllers.js";

const router = express.Router();

router.get("/verify-email", verifyEmail);
router.post("/register", register);
router.post("/login", login);
router.post("/request-reset-password", requestResetPassword);
router.post("/reset-password", resetPassword);

export default router;
