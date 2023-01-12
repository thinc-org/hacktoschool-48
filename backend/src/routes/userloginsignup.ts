//import dependencies
const express = require('express');
import {login} from '../loginsignup/login.post';
import { signupInstructor, signupStudent } from '../loginsignup/signup.post';

export const userRouter = express.Router();

//using login function need to be use /login after api first
userRouter.post("/login", login);
//using signup function need to be use /signup after api first
userRouter.post("/std_signup", signupStudent);
userRouter.post("/ins_signup", signupInstructor);