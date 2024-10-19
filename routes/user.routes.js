import express from "express";
import {
  getAllUsers,
  logOut,
  updateUser,
  deleteUser,
} from "../controllers/users.controllers.js";

const router = express.Router();

router.get("/get-all-users", getAllUsers);
router.post("/logout", logOut);
router.put("/update/:userId", updateUser);
router.delete("/delete/:userId", deleteUser);

export default router;
