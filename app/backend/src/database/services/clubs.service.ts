import Club from '../models/Club';
import Match from '../models/Match';
import { ClubMatches, LeaderboardRow } from '../interfaces';
import { generateLeaderboard } from '../utilities';

export default class ClubsService {
  readonly clubsModel = Club;

  async getAllClubs(): Promise<Club[]> {
    return this.clubsModel.findAll();
  }

  async getClubById(id: string): Promise<Club | null> {
    return this.clubsModel.findByPk(id);
  }

  async checkMatchClubs(homeClub: number, awayClub: number): Promise<boolean> {
    const clubsInfo = await this.clubsModel.findAll({
      where: { id: [homeClub, awayClub] },
    });
    return clubsInfo.length === 2;
  }

  async getLeaderboard(): Promise<LeaderboardRow[]> {
    const clubsLeaderboardData = await this.clubsModel.findAll({
      include: [
        { model: Match, as: 'homeMatches', where: { inProgress: false } },
        { model: Match, as: 'awayMatches', where: { inProgress: false } },
      ],
    }) as ClubMatches[];
    const leaderboard = generateLeaderboard(clubsLeaderboardData);
    return leaderboard;
  }
}
