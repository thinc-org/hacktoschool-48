import * as argon2 from 'argon2';
import { UserModel } from '../model/user';
import { Request, Response } from 'express';
import { model, Schema } from 'mongoose';
import { collections } from '../services/mongoose.service';

export async function hashPassword(pass: string): Promise<string> {
    // Hash the password
    const hash = await argon2.hash(pass);
    return hash;
  }

  // Get info from the request body
  export async function signup(req: Request, res: Response): Promise<void> {
      const { email, password, name, surname, id, courses } = req.body;
      
      collections?.user.findOne({email}).exec((err, user) => {
          // Check if user already exists
          if(user) {
              return res.status(400).json({error: 'User already exists'});
            }
            
        if (!collections) return res.status(500);
        let newUser = new collections.user({ email, password: hashPassword(password), name, surname, id, courses });
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