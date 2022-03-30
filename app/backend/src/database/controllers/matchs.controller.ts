import { MatchsService } from '../services';
import Match from '../models/Match';
import { MatchInfo, UpdatedScore } from '../interfaces';

export default class MatchsController {
  readonly matchsService = new MatchsService();

  async getAllMatchs(): Promise<MatchInfo[]> {
    return this.matchsService.getAllMatchs();
  }

  async getMatchsByStatus(inProgress: string): Promise<Match[]> {
    return this.matchsService.getMatchsByStatus(inProgress);
  }

  async createMatchInProgress(match: Match): Promise<number> {
    return this.matchsService.createMatchInProgress(match);
  }

  async finishMatch(id: string): Promise<void> {
    this.matchsService.finishMatch(id);
  }

  async updateScore(id: string, updatedScore: UpdatedScore): Promise<void> {
    this.matchsService.updateScore(id, updatedScore);
  }
}
