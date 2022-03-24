import User from '../models/User';

export default class UsersService {
  readonly usersModel = User;

  async getUserByEmail(email: string): Promise<User | null> {
    return this.usersModel.findOne({ where: { email } });
  }
}
