import '@babel/polyfill';
import * as functions from 'firebase-functions';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes';
import Config from './config/config';

const app = express();

const configureExpress = () => {
  app.use(cors());
  app.disable('x-powered-by');
  app.use(bodyParser.json());
  app.use(Config.API_BASE, routes);
  return app;
};

export default functions.https.onRequest(configureExpress);
