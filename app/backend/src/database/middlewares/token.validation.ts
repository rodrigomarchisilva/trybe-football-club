import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import * as fs from 'fs';
import { errorResponse } from '../utilities';
import { UsersService } from '../services';

const usersService = new UsersService();

const verifyToken = (res: Response, next: NextFunction, token: string, secret: string) => {
  jwt.verify(token, secret, (error, decoded) => {
    if (error) return errorResponse(res, 'TOKEN_INVALID');
    if (decoded) res.locals.email = decoded.email;
    next();
  });
};

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) return errorResponse(res, 'TOKEN_BLANK');
  const secret: string = await fs.promises.readFile('jwt.evaluation.key', 'utf8');
  verifyToken(res, next, token, secret);
};

const validateEmail = async (_req: Request, res: Response, next: NextFunction) => {
  const { email } = res.locals;
  const userData = await usersService.getUserByEmail(email);
  if (!userData) return errorResponse(res, 'EMAIL_INVALID');
  res.locals.role = userData.role;
  next();
};

const tokenValidation = [validateToken, validateEmail];

export default tokenValidation;
