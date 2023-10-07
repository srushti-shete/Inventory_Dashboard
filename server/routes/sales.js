import express from "express";
import { getSales } from "../controllers/sales.js";

const requireAuth = require('../middleware/requireAuth.js')

const router = express.Router();
router.use(requireAuth);

router.get("/sales", getSales);

export default router;