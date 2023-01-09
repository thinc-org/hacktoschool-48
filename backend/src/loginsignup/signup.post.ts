import * as argon2 from 'argon2';
import User from '../model/user';
import { Request, Response } from 'express';

async function hashPassword(pass: string): Promise<string> {
    // Hash the password
    const hash = await argon2.hash(pass);
    return hash;
  }

async function signup(req: Request, res: Response): Promise<void> {
    // Get info from the request body
    const { email, password, name, surname, id, courses } = req.body;

    User.findOne((email)).exec((err, user) => {
        // Check if user already exists
        if(user) {
            return res.status(400).json({error: 'User already exists'});
        }

        let newUser = new User({ email, password: hashPassword(password), name, surname, id, courses });
        newUser.save((err, success) => {
            if(err) {
                console.log(err);
                return res.status(401).json({error: 'Error signing up, please try again.'})
            }
            return res.json({
                message: 'Signup success! Please signin'
            })
        })
    })


}