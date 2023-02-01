import { MatchesService } from '../services';
import Match from '../models/Match';
import { MatchInfo, UpdatedScore } from '../interfaces';

export default class MatchesController {
  readonly matchesService = new MatchesService();

  async getAllMatches(): Promise<MatchInfo[]> {
    return this.matchesService.getAllMatches();
  }

  async getMatchesByStatus(inProgress: string): Promise<Match[]> {
    return this.matchesService.getMatchesByStatus(inProgress);
  }

  async createMatchInProgress(match: Match): Promise<number> {
    return this.matchesService.createMatchInProgress(match);
  }

  async finishMatch(id: string): Promise<void> {
    this.matchesService.finishMatch(id);
  }

  async updateScore(id: string, updatedScore: UpdatedScore): Promise<void> {
    this.matchesService.updateScore(id, updatedScore);
  }
}
