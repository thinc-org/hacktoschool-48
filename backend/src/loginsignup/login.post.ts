import * as argon2 from 'argon2';
import * as uuid from 'uuid';
import * as cookie from 'cookie';
import { Request, Response } from 'express';
import { User, UserModel } from '../model/user';
import { collections } from '../services/mongoose.service';
import * as jwt from "jsonwebtoken"

export async function login(req: Request, res: Response): Promise<void> {
  // Get email and password from the request body
  const { email, password } = req.body;

  // Look up the user by email
  const user = await getUserByEmail(email);
  if (!user) {
    throw new Error('Invalid email or password');
  }

  // Check if the provided password is correct
  const passwordHash = user.passwordHash;
  const correctPassword = await argon2.verify(passwordHash, password);
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
const token = {
  email: "test@example.com",
  name: "test",
  surname: "example",
  id: "123456",
}
res.json({
  token: jwt.sign(
    token, "testexample"
  )
})

}

async function getUserByEmail(email: string): Promise<User | null | undefined> {
    return collections?.user.findOne({ email })
}

async function setSessionCode(userId: string, sessionCode: string): Promise<void> {
  
  // Store the session code in the database
}

