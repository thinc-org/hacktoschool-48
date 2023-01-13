import * as argon2 from 'argon2';
import { UserModel } from '../model/user';
import { Request, Response } from 'express';

export async function hashPassword(pass: string){
    // Hash the password
    const hash = await argon2.hash(pass);
    return hash;
  }

// Get info from the request body
export async function signupStudent(req: Request, res: Response){
    const { email, password, name, surname } = req.body;
    
    // Validate input
    if (!email || !password || !name || !surname) {
        return res.status(400).json({ message: "`email`, `password`, `name`, and `surname` are required" });
    }

    // Check if user already exists
    const user = await UserModel.findOne(({ email }));
    if (user) {
        return res.status(400).json({error: 'User already exists'});
    }

    // Create User
    const newUser = new UserModel({ 
        email, 
        passwordHash: await hashPassword(password), 
        name, 
        surname, 
        role: "student"
    });
    newUser.save((err, success) => {
        if(err) {
            console.log(err);
            return res.status(401).json({error: 'Error signing up, please try again.'});
        }
            return res.status(201).json({
            message: 'Signup success! Please signin' 
            });
    });
};


export async function signupInstructor(req: Request, res: Response){
    const { email, password, name, surname } = req.body;
    
    // Validate input
    if (!email || !password || !name || !surname) {
        return res.status(400).json({ message: "`email`, `password`, `name`, and `surname` are required" });
    }

    // Check if user already exists
    const user = await UserModel.findOne(({ email }));
    if (user) {
        return res.status(400).json({error: 'User already exists'});
    }

    // Create User
    const newUser = new UserModel({ 
        email, 
        passwordHash: await hashPassword(password), 
        name, 
        surname, 
        role: "instructor"
    });
    newUser.save((err, success) => {
        if(err) {
            console.log(err);
            return res.status(401).json({error: 'Error signing up, please try again.'})
        }
        return res.status(201).json({
            message: 'Signup success! Please signin'
        })
    });
};