import express from "express";
import {
  getAllUsers,
  logOut,
  updateUser,
  deleteUser,
} from "../controllers/users.controllers.js";
import { verifyAdmin } from "../middlwares/verifyAdmin.js";
import { verifyUser } from "../middlwares/verifyUser.js";

const router = express.Router();

router.get("/get-all-users", getAllUsers);
router.post("/logout", logOut);
router.put("/update", verifyUser, updateUser);
router.delete("/delete", verifyUser, deleteUser);

export default router;
