//import dependencies
const express = require('express')
const login = require('../loginsignup/login.post')
const signup = require('../loginsignup/signup.post')

export const userRouter = express.Router();

//using login function need to be use /login after api first
userRouter.post("/login", login)
//using signup function need to be use /signup after api first
userRouter.post("/signup", signup)