import * as argon2 from 'argon2';
import * as uuid from 'uuid';
import * as cookie from 'cookie';
import { Request, Response } from 'express';

async function login(req: Request, res: Response): Promise<void> {
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

  // Generate a session code and set it in a cookie
  const sessionCode = uuid.v4();
  await setSessionCode(user.id, sessionCode);
  res.setHeader('Set-Cookie', cookie.serialize('session_code', sessionCode, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7 // 1 week
  }));

  // Return the session code in the response
  res.send({ sessionCode });
}

async function getUserByEmail(email: string): Promise<Email | null> {
  // Query database for user with the given email
}

async function setSessionCode(userId: string, sessionCode: string): Promise<void> {
  // Store the session code in the database
}
