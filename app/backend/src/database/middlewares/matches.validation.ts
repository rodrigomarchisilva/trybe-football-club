import { Request, Response, NextFunction } from 'express';
import { errorResponse } from '../utilities';
import { ClubsService } from '../services';
import { NewMatch } from '../interfaces';

const clubsService = new ClubsService();

const compareTeams = async (req: Request, res: Response, next: NextFunction) => {
  const { homeTeam, awayTeam } = req.body as NewMatch;
  if (homeTeam === awayTeam) return errorResponse(res, 'TEAMS_SAME');
  next();
};

const validateTeams = async (req: Request, res: Response, next: NextFunction) => {
  const { homeTeam, awayTeam } = req.body as NewMatch;
  const teams = await clubsService.checkMatchClubs(homeTeam, awayTeam);
  if (!teams) return errorResponse(res, 'TEAMS_INVALID');
  next();
};

const matchesValidation = [compareTeams, validateTeams];

export default matchesValidation;
