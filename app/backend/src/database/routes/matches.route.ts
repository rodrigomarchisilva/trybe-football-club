import { Router, Request, Response } from 'express';
import { MatchesController } from '../controllers';
import { tokenValidation, matchesValidation } from '../middlewares';
import { UpdatedScore } from '../interfaces';

const matchesRouter = Router({ mergeParams: true });
const matchesController = new MatchesController();

matchesRouter.get('/', async (req: Request, res: Response) => {
  const { inProgress } = req.query as { inProgress: string | undefined };
  let clubs;
  if (!inProgress) clubs = await matchesController.getAllMatches();
  else clubs = await matchesController.getMatchesByStatus(inProgress);
  res.status(200).json(clubs);
});

matchesRouter.post('/', tokenValidation, matchesValidation, async (req: Request, res: Response) => {
  const match = req.body;
  const id = await matchesController.createMatchInProgress(match);
  res.status(201).json({ id, ...match });
});

matchesRouter.patch('/:id/finish', async (req: Request, res: Response) => {
  const { id } = req.params;
  await matchesController.finishMatch(id);
  res.status(200).json({ message: 'Match finished' });
});

matchesRouter.patch('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedScore: UpdatedScore = req.body;
  await matchesController.updateScore(id, updatedScore);
  res.status(200).json({ message: 'Score updated' });
});

export default matchesRouter;
