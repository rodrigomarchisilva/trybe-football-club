import { Router, Request, Response } from 'express';
import { LoginController } from '../controllers';
import loginValidation from '../middlewares/login.validation';

const loginRouter = Router({ mergeParams: true });
const loginController = new LoginController();

loginRouter.post('/', loginValidation, async (req: Request, res: Response) => {
  const { email } = req.body;
  const { user } = res.locals;
  const token = await loginController.login(email);
  res.status(200).json({ user, token });
});

export default loginRouter;
