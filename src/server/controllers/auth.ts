import { Request, Response } from 'express';

import { signupMessages } from '../../shared/strings.js';

// interface SignupRequest {
//   email: string;
//   password: string;
//   confirmPassword: string;
// }

export async function signup(req: Request, res: Response) {
  try {
    validateSignupCredentials(req.body);

    const { email, password, confirmPassword } = req.body;
    // const hashedPassword = ;
    
    // db transaction:
    //   query to check if email exists
    //   if not, create user and return user
    //   else return user id and error
    //      log the user id and attempted signup
    //       send user security notification
  } catch (error: any) {
    console.error(`*** Error *** signing up user: ${error.message}`);
    throw error;
  } finally {
    // client.release()
  }
}

//
// helpers
//

// Sanity checks since client handles basic validation
function validateSignupCredentials(body: any) {
  // TODO: error logging impl
  if (!body.email || !body.password || !body.confirmPassword) {
    throw new Error(signupMessages.missingField);
  }

  if (body.password !== body.confirmPassword) {
    throw new Error(signupMessages.passwordCriteria);
  }

  // TODO: check pwd strength. also throw passwordCriteria for this case
}
