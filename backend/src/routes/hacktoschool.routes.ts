import { Router } from 'express';
const express = require('express');
import { Request,Response } from "express";
import { MongooseError } from 'mongoose';
import { UserModel } from '../model/user';
import { CourseModel } from '../model/courses';
import { TokenPayload } from '../loginsignup/login.post'
import * as jwt from "jsonwebtoken";
import { countReset } from 'console';
import { userInfo } from 'os';

export const router = Router();

// get 1 user
router.get("/user", async (req: Request, res: Response) => {
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

    try{
        const User = await UserModel.findOne({ _id: user._id }).select("email name surname courses role -_id");

        res.status(200).json(User);
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

// get 1 user
router.get("/userdetail/:email", async (req: Request, res: Response) => {
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

    const emailus = req?.params?.email;

    try{
        const Userdetail = await UserModel.findOne({email: emailus}).select("_id name surname email role")

        res.status(200).send(Userdetail);
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

// get all courses (show all except students enrolled)
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
    /* function exceptStudent() {

        const nonstudent = {
            student: false
        }
        CourseModel.find({} ,nonstudent, function (err,nonStudent){
            return nonStudent
        });
    } */
    const courses = await CourseModel.find().select("title description instructorName level");
    res.status(200).send(courses);
});

//lines 70 & 73 undone maiwai laew


// instructor get all their courses
router.get("/course/mycourses", async (req: Request, res: Response) => {
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

    // Check if the user is instructor
    const User = await UserModel.findOne({ _id: user._id });
    if (User?.role !== 'instructor') {
        return res.status(403).json({ message: "Only instructors can view their courses" });
    }
    
    const userCourses = await CourseModel.find({ instructorName: User.name });
    return userCourses;
});


// instructor get students enrolled for 1 course
router.get("/course/mycourses/:title", async (req: Request, res: Response) => {
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


    // Check if the user is instructor
    const User = await UserModel.findOne({ _id: user._id });
    if (User?.role !== 'instructor') {
        return res.status(403).json({ message: "Only instructors can view enrolled students" });
    }

    const title = req?.params?.title;
    const course = await CourseModel.findOne({ instructorName: User.name, title });
    return res.status(200).json(course?.student);
})

// get 1 user
router.get("/mycourse/:id", async (req: Request, res: Response) => {
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

    const emailstu = req?.params?.email;
    try{
        const User = await UserModel.findOne({email: emailstu})
    if (User?.role === "student"){
        const studentcourse = await UserModel.findOne({ emailstu }).select("courses")
        res.status(200).send(studentcourse)
    }
        res.status(400).send("you are not a student :3");
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


// student enroll in a course
router.post("/stucourse/:title", async (req: Request, res: Response) => {
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
        const User = await UserModel.findOne({ _id: user._id });
        const course = await CourseModel.findOne({ title });
        User?.courses.push(course?._id);
        course?.student.push(User?._id);
        await User?.save();
        await course?.save();
        res.status(200).send('Enrolled successfully yayyyy!');
        
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
router.post("/instcourse", async (req: Request, res: Response) => {
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
    if (user.role !== "instructor") {
        return res.status(403).json({ message: "Only instructors can create course" });
    }

    // Create course
    const { title, description, level } = req.body;

    const User = await UserModel.findOne({ _id: user._id });
    
    // Validate input
    if (!title || !description || !level) {
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
        instructorName: User?.name,
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

