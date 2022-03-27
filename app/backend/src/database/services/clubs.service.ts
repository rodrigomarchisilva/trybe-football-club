import Club from '../models/Club';

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
}
