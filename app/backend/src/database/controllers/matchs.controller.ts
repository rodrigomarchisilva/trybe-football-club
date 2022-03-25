import { MatchsService } from '../services';
import Match from '../models/Match';

export default class MatchsController {
  readonly matchsService = new MatchsService();

  async getAllMatchs(): Promise<Match[]> {
    return this.matchsService.getAllMatchs();
  }
}
