import { Router, Request, Response } from 'express';
import { MatchsController } from '../controllers';
import { tokenValidation, matchsValidation } from '../middlewares';
import { UpdatedScore } from '../interfaces';

const matchsRouter = Router({ mergeParams: true });
const matchsController = new MatchsController();

matchsRouter.get('/', async (req: Request, res: Response) => {
  const { inProgress } = req.query as { inProgress: string | undefined };
  let clubs;
  if (!inProgress) clubs = await matchsController.getAllMatchs();
  else clubs = await matchsController.getMatchsByStatus(inProgress);
  res.status(200).json(clubs);
});

matchsRouter.post('/', tokenValidation, matchsValidation, async (req: Request, res: Response) => {
  const match = req.body;
  const id = await matchsController.createMatchInProgress(match);
  res.status(201).json({ id, ...match });
});

matchsRouter.patch('/:id/finish', async (req: Request, res: Response) => {
  const { id } = req.params;
  await matchsController.finishMatch(id);
  res.status(200).json({ message: 'Match finished' });
});

matchsRouter.patch('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedScore: UpdatedScore = req.body;
  await matchsController.updateScore(id, updatedScore);
  res.status(200).json({ message: 'Match finished' });
});

export default matchsRouter;
