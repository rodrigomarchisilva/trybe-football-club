import Club from '../models/Club';

export default class ClubsService {
  readonly clubsModel = Club;

  async getAllClubs(): Promise<Club[]> {
    return this.clubsModel.findAll();
  }
}
