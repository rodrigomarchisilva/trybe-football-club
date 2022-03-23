import * as fs from 'fs';
import * as jwt from 'jsonwebtoken';

export default async function generateToken(email: string): Promise<string> {
  const secret: string = await fs.promises.readFile('jwt.evaluation.key', 'utf8');
  const jwtConfig = { expiresIn: '30d' };
  return jwt.sign({ email }, secret, jwtConfig);
}
