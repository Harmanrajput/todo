import express from 'express';
import { login, register ,getMyProfile, logout} from '../controllers/users.js';
import { isAuthenticated } from '../middlewares/auth.js';

const router =express.Router();

router.post("/register",register)
router.post("/login",login)
router.get("/profile",isAuthenticated ,getMyProfile)
router.get("/logout",logout)



export default router;