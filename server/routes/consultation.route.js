import express from "express";

import {
  consultationController,
} from "../controllers/consultation.controller.js";

const router = express.Router();

router.post(
  "/consultation",
  consultationController
);

export default router;