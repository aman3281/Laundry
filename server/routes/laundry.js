import express from "express";

import {
  getLaundry,
  createLaundry,
  changeStatus,
  getAllLaundry,
} from "../controllers/laundry.js";
import auth from "../middleware/auth.js";
const router = express.Router();

router.get("/", auth, getLaundry);
router.post("/", auth, createLaundry);
router.get("/getAllLaundry", getAllLaundry);
router.patch("/:id", changeStatus);

export default router;
