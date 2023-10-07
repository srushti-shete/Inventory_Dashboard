import express from "express";
import { getAdmins, getUserPerformance } from "../controllers/management.js";

const requireAuth = require('../middleware/requireAuth.js')

const router = express.Router();
router.use(requireAuth);

router.get("/admins", getAdmins);
router.get("/performance/:id", getUserPerformance);

export default router;