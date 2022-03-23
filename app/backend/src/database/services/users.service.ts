import User from '../models/User';

export default class UsersService {
  readonly userModel = User;

  async getUserByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ where: { email } });
  }
}
