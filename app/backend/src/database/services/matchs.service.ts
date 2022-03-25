import Club from '../models/Club';
import Match from '../models/Match';

export default class MatchsService {
  readonly matchsModel = Match;

  async getAllMatchs(): Promise<Match[]> {
    return this.matchsModel.findAll({
      include: [
        { model: Club, as: 'homeClub', attributes: { exclude: ['id'] } },
        { model: Club, as: 'awayClub', attributes: { exclude: ['id'] } },
      ],
    });
  }
}
