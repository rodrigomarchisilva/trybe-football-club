import * as express from 'express';
import * as bodyParser from 'body-parser';
// import { errorMiddleware } from './database/middlewares';
import loginRouter from './database/routes/login.route';

class App {
  public app: express.Express;
  // ...

  constructor() {
    this.app = express();
    this.config();
    // ...
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    this.app.use(bodyParser.json());

    this.app.use('/login', loginRouter);

    // this.app.use(errorMiddleware);
  }

  // ...
  public start(PORT: string | number):void {
    this.app.listen(PORT, () => { console.log(`Listening on port ${PORT}`); });
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();
