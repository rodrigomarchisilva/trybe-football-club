import { Router, Request, Response } from 'express';
import { MatchsController } from '../controllers';

const matchsRouter = Router({ mergeParams: true });
const matchsController = new MatchsController();

matchsRouter.get('/', async (_req: Request, res: Response) => {
  const clubs = await matchsController.getAllMatchs();
  res.status(200).json(clubs);
});

export default matchsRouter;
