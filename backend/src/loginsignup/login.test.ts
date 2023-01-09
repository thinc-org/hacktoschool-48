import request from 'supertest';
import { app } from '../app';
import argon2 from "argon2";

describe('login', () => {
  it('should return a session code if email and password are correct', async () => {
    // Set up the test database
    const email = 'test@example.com';
    const password = 'password';
    const passwordHash = await argon2.hash(password);
    const user = { email, passwordHash };
    await setUser(user);

    // Send a request to the login route
    const response = await request(app)
      .post('/login')
      .send({ email, password });

    // Assert that the response status is 200 and the body contains a session code
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('sessionCode');
  });
});
