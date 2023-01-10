import { Router } from 'express';
const express = require('express')
const userRouter = require('./userloginsignup')
import { Request,Response } from "express"
import { collections } from '../services/mongoose.service';
import { MongooseError } from 'mongoose';
import { getAllJSDocTagsOfKind } from 'typescript';
import { User, UserModel } from '../model/user';

export const router = Router();

const app = express();

// check user's role
router.use((req, res, next) => {
    const { _id } = req.session.user; // assuming you're using session to store the logged in user's ID
    collections?.user.findById(_id)
      .then(user => {
        req.user = user;
        next();
      })
      .catch(err => {
        res.status(500).send(err);
      });
  });

userRouter.post();

// get 1 user
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

// get all courses
router.get("/courses", async (req:Request , res:Response) => {
    try {
        const courses = collections?.course;
        if (req.users.role === 'instructor') {
            collections?.course.find()
              .then(courses => {
                res.send(courses);
              })
              .catch(err => {
                res.status(500).send(err);
              });
          } else if (req.users.role === 'student') {
            collections?.course.find({}, { 
                title: 1, 
                description: 1,
                instructorName: 1 
            }).then(courses => {
                res.send(courses);
              })
              .catch(err => {
                res.status(500).send(err);
              });
          }
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

