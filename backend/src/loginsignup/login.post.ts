import * as argon2 from 'argon2';
import { Request, Response } from 'express';
import { User, UserModel } from '../model/user';
import * as jwt from "jsonwebtoken";
// import { ObjectID } from "typeorm";

export interface TokenPayload {
  _id: string;
  email: string;
  role: string;
}

export async function login(req: Request, res: Response){
  // Get email and password from the request body
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
      res
      .status(400)
      .json({ message: "`email` and `password` are required" }).send()
      .set({'Location': '/login'});
  }

  // Check if user exists
  const user = await UserModel.findOne({ email });
  if (!user) {
    res
    .status(400)
    .json({ message: "Invalid email or password" }).send();
  }

  // Check if the provided password is correct
  const passwordHash = user?.passwordHash;
  const correctPassword = await argon2.verify(passwordHash!, password);
  if (!correctPassword) {
    res
    .status(400)
    .json({ message: "Invalid email or password" }).send();
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
    _id: user?._id,
    email: user?.email,
    name: user?.name,
    surname: user?.surname,
    role: user?.role
  },
  process.env.JWT_SECRET!
);

 res.status(200).send({ token }).send();
}

/* async function getUserByEmail(email: string): Promise<User | null | undefined> {
    return collections?.user.findOne({ email })
}

async function setSessionCode(userId: string, sessionCode: string): Promise<void> {
  
  // Store the session code in the database */


