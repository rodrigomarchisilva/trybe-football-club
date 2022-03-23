import { Response } from 'express';
import { ErrorMessages, ErrorCodes } from '../enums';

export default function errorResponse(res: Response, key: string) {
  const messageIndex: number = Object.keys(ErrorMessages).indexOf(key);
  const codeIndex: number = Object.keys(ErrorCodes).indexOf(key);
  const message = Object.values(ErrorMessages)[messageIndex];
  const code = Number(Object.values(ErrorCodes)[codeIndex]);
  return res.status(code).json({ message });
}
