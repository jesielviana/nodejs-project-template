import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import routes from './routes';
import database from './config/database';
import Config from './config/config';
import logger from './config/logger';

const app = express();

const configureExpress = () => {
  app.use(cors());
  app.use(helmet());
  app.use(helmet.xssFilter());
  app.use(helmet.noSniff());
  app.disable('x-powered-by');
  app.use(bodyParser.json());
  app.use(
    morgan('common', {
      stream: {
        write: (message) => {
          logger.info(message);
        },
      },
    }),
  );
  app.use(Config.API_BASE, routes);
  return app;
};

export default () => database.connect().then(configureExpress);
