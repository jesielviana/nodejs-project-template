const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const routes = require('./routes');
const database = require('./config/database');
const Config = require('./config/config');
const logger = require('./config/logger');

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

module.exports = () => database().then(configureExpress);
