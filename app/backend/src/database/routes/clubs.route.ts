import { Router, Request, Response } from 'express';
import { ClubsController } from '../controllers';

const clubsRouter = Router({ mergeParams: true });
const clubsController = new ClubsController();

clubsRouter.get('/', async (_req: Request, res: Response) => {
  const clubs = await clubsController.getAllClubs();
  res.status(200).json(clubs);
});

export default clubsRouter;
