import { Router } from 'express';
const express = require('express')
const userRouter = require('./userloginsignup')
import { Request,Response } from "express"
import { MongooseError } from 'mongoose';
import { getAllJSDocTagsOfKind } from 'typescript';
import { UserModel } from '../model/user';
import { CourseModel } from '../model/courses';
import { TokenPayload } from '../loginsignup/login.post'
import * as jwt from "jsonwebtoken";

export const router = Router();

const app = express();

// get 1 user
router.get("/user/:id", async (req: Request, res: Response) => {
    // Check if token exists
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: "No token found in Authorization header" });
    }

    // Validate token
    let user: TokenPayload;
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET!);
        user = payload as TokenPayload;
    } catch {
        return res.status(401).json({ message: "Invalid token" });
    }

    const id = req?.params?.id;

    try{
        const user = await UserModel.findOne({ id });

        res.status(200).send(user);
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
router.get("/course", async (req:Request , res:Response) => {
    
    // Check if token exists
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: "No token found in Authorization header" });
    }

    // Validate token
    let user: TokenPayload;
    try {
        user = jwt.verify(token, process.env.JWT_SECRET!) as TokenPayload;
    } catch {
        return res.status(401).json({ message: "Invalid token" });
    }
    function exceptStudent() {

        const nonstudent = {
            student: false
        }
        CourseModel.find({} ,nonstudent, function (err,nonStudent){
            return nonStudent
        });
    }
    const courses = await CourseModel.find();
    // Check if user is instructor
    // If not instructor, can view all properties except students enrolled
    if (user.role !== "instructor") {
        return exceptStudent(courses);
    }
    // Instructors can view students enrolled
    return courses;
});

//lines 70 & 73 undone maiwai laew


// student enroll in a course
router.post("/course/:title", async (req: Request, res: Response) => {
    // Check if token exists
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: "No token found in Authorization header" });
    }

    // Validate token
    let user: TokenPayload;
    try {
        user = jwt.verify(token, process.env.JWT_SECRET!) as TokenPayload;
    } catch {
        return res.status(401).json({ message: "Invalid token" });
    }

    // post user into CourseModel's Students
    const title = req?.params?.title;

    try{
        const course = await CourseModel.findOne({ title });
        course?.student.push(user);
        
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


// instructor create course
router.post("/course", async (req: Request, res: Response) => {
    // Check if token exists
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: "No token found in Authorization header" });
    }

    // Validate token
    let user: TokenPayload;
    try {
        user = jwt.verify(token, process.env.JWT_SECRET!) as TokenPayload;
    } catch {
        return res.status(401).json({ message: "Invalid token" });
    }

    // Check if user is instructor
    if (user.role !== "instrctor") {
        return res.status(403).json({ message: "Only instructors can create course" });
    }

    // Create course
    const { title, description, instructorName, level } = req.body;
    
    // Validate input
    if (!title || !description || !instructorName || !level) {
        res.status(400).json({ message: "`title`, `description`, `instructorName` and `level` are required" }).send();
    }

    // Check if user already exists
    const course = await CourseModel.findOne(({ title }));
    if (course) {
        res.status(400).json({error: 'Course already exists'}).send();
    }
    
    const newCourse = new CourseModel({
        title,
        description,
        instructorName,
        level
    });
    newCourse.save((err, success) => {
        if (err) {
            console.log(err);
            return res.status(401).json({error: 'Error creating course, please try again.'})
        }
        return res.status(201).json({
            message: 'Course created!'
        })
    })
});