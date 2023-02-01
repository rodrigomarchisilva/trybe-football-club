import Club from '../models/Club';
import Match from '../models/Match';
// import { ClubsService } from '.';
import { UpdatedScore, /* Leaderboards, */ MatchInfo } from '../interfaces';

export default class MatchesService {
  readonly matchesModel = Match;

  readonly clubsModel = Club;

  async getAllMatches(): Promise<MatchInfo[]> {
    const matches = await this.matchesModel.findAll({
      include: [
        { model: Club, as: 'homeClub', attributes: { exclude: ['id'] } },
        { model: Club, as: 'awayClub', attributes: { exclude: ['id'] } },
      ],
    });
    return matches as MatchInfo[];
  }

  async getMatchesByStatus(inProgress: string): Promise<Match[]> {
    return this.matchesModel.findAll({
      where: { inProgress: JSON.parse(inProgress) },
      include: [
        { model: Club, as: 'homeClub', attributes: { exclude: ['id'] } },
        { model: Club, as: 'awayClub', attributes: { exclude: ['id'] } },
      ],
    });
  }

  async createMatchInProgress(match: Match): Promise<number> {
    const insertionInfo = await this.matchesModel.create(match);
    const matchId = insertionInfo.id;
    return matchId;
  }

  async finishMatch(id: string): Promise<void> {
    this.matchesModel.update({ inProgress: false }, { where: { id } });
  }

  async updateScore(id: string, updatedScore: UpdatedScore): Promise<void> {
    const { homeTeamGoals, awayTeamGoals } = updatedScore;
    this.matchesModel.update(
      { homeTeamGoals, awayTeamGoals },
      { where: { id } },
    );
  }
}
