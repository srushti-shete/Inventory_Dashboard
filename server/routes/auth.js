import express from 'express';
import { loginUser, signupUser} from "../controllers/client.js";

const router = express.Router();

//login routes 
router.post("/login", loginUser);

// signup route
router.post('/signup', signupUser)

export default router;