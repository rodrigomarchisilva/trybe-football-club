import Club from '../models/Club';
import Match from '../models/Match';
// import { ClubsService } from '.';
import { UpdatedScore, /* Leaderboards, */ MatchInfo } from '../interfaces';

export default class MatchsService {
  readonly matchsModel = Match;

  readonly clubsModel = Club;

  async getAllMatchs(): Promise<MatchInfo[]> {
    const matchs = await this.matchsModel.findAll({
      include: [
        { model: Club, as: 'homeClub', attributes: { exclude: ['id'] } },
        { model: Club, as: 'awayClub', attributes: { exclude: ['id'] } },
      ],
    });
    return matchs as MatchInfo[];
  }

  async getMatchsByStatus(inProgress: string): Promise<Match[]> {
    return this.matchsModel.findAll({
      where: { inProgress: JSON.parse(inProgress) },
      include: [
        { model: Club, as: 'homeClub', attributes: { exclude: ['id'] } },
        { model: Club, as: 'awayClub', attributes: { exclude: ['id'] } },
      ],
    });
  }

  async createMatchInProgress(match: Match): Promise<number> {
    const insertionInfo = await this.matchsModel.create(match);
    const matchId = insertionInfo.id;
    return matchId;
  }

  async finishMatch(id: string): Promise<void> {
    this.matchsModel.update({ inProgress: false }, { where: { id } });
  }

  async updateScore(id: string, updatedScore: UpdatedScore): Promise<void> {
    const { homeTeamGoals, awayTeamGoals } = updatedScore;
    this.matchsModel.update(
      { homeTeamGoals, awayTeamGoals },
      { where: { id } },
    );
  }
}
