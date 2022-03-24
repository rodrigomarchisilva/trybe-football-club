import Club from '../models/Club';
import { ClubsService } from '../services';

export default class ClubsController {
  readonly clubsService = new ClubsService();

  async getAllClubs(): Promise<Club[]> {
    return this.clubsService.getAllClubs();
  }
}
