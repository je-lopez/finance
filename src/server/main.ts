import 'dotenv/config.js';
import express, { Request, Response } from 'express';
import ViteExpress from 'vite-express';

import { signup } from './controllers/auth.js';
import { signupMessages } from '../shared/strings.js';
// import { Client } from 'node-postgres';

const app = express();

app.get('/test', (_, res) => {
  console.log('SERVER /test:: ', process.env.ACCESS_TOKEN_SECRET);
  res.send('Test response from Express');
});

app.post('/signup', async (req: Request, res: Response) => {
  try {
    await signup(req, res);
    // get user
    // re-route to landing/home
  } catch (error: any) {
    // if email exists, return 409?
    switch (error.message) {
      case signupMessages.missingField:
        res.status(400).json({ message: signupMessages.missingField });
        break;
      case signupMessages.passwordCriteria:
        res.status(401).json({ message: signupMessages.passwordCriteria });
        break;
      default:
        console.error('Error signing up user', error);
        res.status(500).json({ message: 'Internal server error' });
        break;
    }
  }
});

// app.post('/signup', async (req, res) => {
//   // TODO: think about: email length, email validity, pwd(s) lengths and validity
//   // TODO: add logging (informational logging) -signup attempt.. add limit?
//   const { email, password, confirmPassword } = req.body;
//   if (!email || !password || !confirmPassword) {
//     res.status(400).json({ message: 'Missing required field(s)' });
//   }

//   // TODO: is this sufficient?
//   if (password !== confirmPassword) {
//     res.status(401).json({ message: 'Authentication failure' });
//   }

//   // if email exists, return 409?

//   try {
//     res.status(201).json({ message: 'Signup successful' });
//   } catch (error) {
//     console.error(error);
//     // TODO: add logging (error logging)
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

ViteExpress.listen(app, 3000, () =>
  console.log('\n--- Server is listening on port 3000 ---\n'),
);
