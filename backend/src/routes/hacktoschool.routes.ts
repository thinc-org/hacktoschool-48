import { Router } from 'express';
import { login } from '../loginsignup/login.post';
import { signup } from '../loginsignup/signup.post';
export const router = Router();

router.post("/login",login)
router.post("/signup",signup)
