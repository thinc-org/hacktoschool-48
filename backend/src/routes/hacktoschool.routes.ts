import { Router } from 'express';
const express = require('express')
const userRouter = require('./userloginsignup')
import { Request,Response } from "express"
import { collections } from '../services/mongoose.service';
import { Course } from "../model/courses"
import { MongooseError } from 'mongoose';
import { getAllJSDocTagsOfKind } from 'typescript';

export const router = Router();

const app = express();

userRouter.post();

router.get("/user/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try{
        const users = await collections?.user.find({});

        res.status(200).send(users);
    } catch (error) {
        if (error instanceof MongooseError){
            res.status(500).send(error.message);
            return;
        }     
        else{
            res.status(500).send("unknown error");
            return;
        }
    }
});

router.get("/courses" , async (req:Request , res:Response) => {
});

router.post("/course" , async (req: Request , res: Response) => {

})