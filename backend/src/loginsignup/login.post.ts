import * as argon2 from 'argon2';
import * as uuid from 'uuid';
import * as cookie from 'cookie';

async function login(username: string, password: string, res: Response): Promise<void> {
  const user = await getUserByUsername(username);
  if (!user) {
    throw new Error('Invalid username or password');
  }
  const passwordHash = user.passwordHash;
  const correctPassword = await argon2.verify(passwordHash, password);
  if (!correctPassword) {
    throw new Error('Invalid username or password');
  }
  const sessionCode = uuid.v4();
  await setSessionCode(user.id, sessionCode);
  res.setHeader('Set-Cookie', cookie.serialize('session_code', sessionCode, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7 // 1 week
  }));
}

async function getUserByUsername(username: string): Promise<User | null> {
  // Query database for user with the given username
}

async function setSessionCode(userId: string, sessionCode: string): Promise<void> {
  // Store the session code in the database
}
