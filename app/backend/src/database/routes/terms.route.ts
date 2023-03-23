import { Router, Request, Response } from 'express';
import * as fs from 'fs';
import * as path from 'path';

const termsRouter = Router({ mergeParams: true });

termsRouter.get('/', async (_req: Request, res: Response) => {
  try {
    const filePath = path.join(__dirname, '..', '..', 'terms', 'copyright.txt');
    const data = fs.readFileSync(filePath, 'utf8');
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error reading file' });
  }
});

export default termsRouter;
