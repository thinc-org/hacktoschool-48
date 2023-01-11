import * as argon2 from 'argon2';
import { Request, Response } from 'express';
import { User, UserModel } from '../model/user';
import * as jwt from "jsonwebtoken";

export interface TokenPayload {
  id: string;
  email: string;
  role: string;
}

export async function login(req: Request, res: Response): Promise<void> {
  // Get email and password from the request body
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
<<<<<<< HEAD
      res
=======
    res
>>>>>>> cb64147313ac48b8d795dd69b3f0747f0ef4a96e
      .status(400)
      .json({ message: "`email` and `password` are required" }).send();
  }

  // Check if user exists
  const user = await UserModel.findOne({ email });
  if (!user) {
    throw new Error('Invalid email or password');
  }

  // Check if the provided password is correct
  const passwordHash = user.passwordHash;
  const correctPassword = await argon2.verify(passwordHash!, password);
  if (!correctPassword) {
    throw new Error('Invalid email or password');
  }

  // // Generate a session code and set it in a cookie
  // const sessionCode = uuid.v4();
  // await setSessionCode(user.id, sessionCode);
  // res.setHeader('Set-Cookie', cookie.serialize('session_code', sessionCode, {
  //   httpOnly: true,
  //   maxAge: 60 * 60 * 24 // 1 day
  // }));

//   // Return the session code in the response
//   res.send({ sessionCode });
// }

// Generate token
const token = jwt.sign(
  {
    email: user.email,
    name: user.name,
    surname: user.surname,
    id: user.id,
    role: user.role
  },
  process.env.JWT_SECRET!
);

<<<<<<< HEAD
 res.status(200).send({ token }).send();
=======
res.status(200).send({ token }).send();
>>>>>>> cb64147313ac48b8d795dd69b3f0747f0ef4a96e

}

/* async function getUserByEmail(email: string): Promise<User | null | undefined> {
    return collections?.user.findOne({ email })
}

async function setSessionCode(userId: string, sessionCode: string): Promise<void> {
  
  // Store the session code in the database */


