import * as argon2 from 'argon2';
import { UserModel } from '../model/user';
import { Request, Response } from 'express';

export async function hashPassword(pass: string){
    // Hash the password
    const hash = await argon2.hash(pass);
    return hash;
  }

// Get info from the request body
export async function signup(req: Request, res: Response){
    const { email, password, name, surname, id, role } = req.body;
    
    // Validate input
    if (!email || !password || !name || !surname || !id || !role) {
        res.status(400).json({ message: "`email`, `password`, `name`, `surname`, `id` and `role` are required" }).send();
    }

    // Check if user already exists
    const user = await UserModel.findOne(({ email }));
    if (user) {
        res.status(400).json({error: 'User already exists'}).send();
    }

    // Create User
    const newUser = new UserModel({ 
        email, 
        passwordHash: await hashPassword(password), 
        name, 
        surname, 
        id, 
        role 
    });
    await newUser.save((err, success) => {
        if(err) {
            console.log(err);
            return res.status(401).json({error: 'Error signing up, please try again.'})
        }
        return res.status(201).json({
            message: 'Signup success! Please signin'
        })
    });
};