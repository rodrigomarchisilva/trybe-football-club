import { Router, Request, Response } from 'express';
import { ClubsService } from '../services';

const leaderboardsRouter = Router({ mergeParams: true });
const clubsService = new ClubsService();

leaderboardsRouter.get('/home', async (_req: Request, res: Response) => {
  const leaderboard = await clubsService.getLeaderboard('home');
  res.status(200).json(leaderboard);
});

leaderboardsRouter.get('/away', async (_req: Request, res: Response) => {
  const leaderboard = await clubsService.getLeaderboard('away');
  res.status(200).json(leaderboard);
});

leaderboardsRouter.get('/', async (_req: Request, res: Response) => {
  const leaderboard = await clubsService.getLeaderboard('');
  res.status(200).json(leaderboard);
});

export default leaderboardsRouter;
