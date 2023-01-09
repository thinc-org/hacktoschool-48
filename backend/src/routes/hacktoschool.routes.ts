import { Router } from 'express';
const express = require('express')
const userRouter = require('./userloginsignup')
import { Request,Response } from "express"
import { Collection } from 'mongoose';
import { Course } from "../model/courses"

export const router = express.Router();

const app = express();

router.get("/" , async (req:Request , res:Response) => {
    try {
        const Courses = (await Collection.course!.findOne({}).toArray())
    }
});