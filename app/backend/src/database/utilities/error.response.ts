import { Response } from 'express';
import { ErrorMessages, ErrorCodes } from '../enums';

type ErrorMessagesKey = keyof typeof ErrorMessages;
type ErrorCodesKey = keyof typeof ErrorCodes;

export default function errorResponse(res: Response, key: ErrorMessagesKey | ErrorCodesKey) {
  const message = ErrorMessages[key];
  const code = +ErrorCodes[key];
  return res.status(code).json({ message });
}
