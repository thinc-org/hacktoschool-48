import { Router } from 'express';
const express = require('express')
const userRouter = require('./userloginsignup')
import { Request,Response } from "express"
import { collections } from '../services/mongoose.service';
import { Course } from "../model/courses"

export const router = Router();

const app = express();

userRouter.post();

router.get("/user/id", )

router.get("/courses" , async (req:Request , res:Response) => {
    try {
        const Courses = (await collections?.course.findOne({}).toArray())
    }
});