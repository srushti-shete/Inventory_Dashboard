import express from 'express';
import {getProducts,  getCustomers, getTransactions, getGeography } from "../controllers/client.js";
const requireAuth = require('../middleware/requireAuth.js')

const router = express.Router();
router.use(requireAuth);

router.get("/products", getProducts);
router.get("/customers", getCustomers);
router.get("/transactions", getTransactions);
router.get("/geography", getGeography);


export default router;