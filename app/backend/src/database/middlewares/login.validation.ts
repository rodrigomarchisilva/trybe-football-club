import { Request, Response, NextFunction } from 'express';
import * as bcrypt from 'bcryptjs';
import { UsersService } from '../services';
import { errorResponse } from '../utilities';

const usersService = new UsersService();

const validateEmailStructure = async (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;
  if (!email) return errorResponse(res, 'LOGIN_BLANK');
  if (!(/^\S+@\S+\.\S+$/.test(email))) return errorResponse(res, 'LOGIN_INCORRECT');
  next();
};

const validateEmailAuthenticity = async (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;
  const userData = await usersService.getUserByEmail(email);
  if (!userData) return errorResponse(res, 'LOGIN_INCORRECT');
  const { id, username, role, password } = userData;
  res.locals.user = { id, username, role, email };
  res.locals.hash = password;
  next();
};

const validatePassword = async (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  const { hash } = res.locals;
  if (!password) return errorResponse(res, 'LOGIN_BLANK');
  if (password.length < 6 || !bcrypt.compareSync(password, hash)) {
    return errorResponse(res, 'LOGIN_INCORRECT');
  }
  next();
};

const loginValidation = [validateEmailStructure, validateEmailAuthenticity, validatePassword];

export default loginValidation;
