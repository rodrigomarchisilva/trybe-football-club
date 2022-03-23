import { generateToken } from '../utilities';

export default class LoginController {
  readonly generateToken = generateToken;

  async login(email: string): Promise<string> {
    return this.generateToken(email);
  }
}
