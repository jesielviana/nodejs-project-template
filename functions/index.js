// eslint-disable-next-line import/no-unresolved
const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
const Config = require('./config/config');

const app = express();

app.use(cors());
app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(Config.API_VERSION, routes);

exports.api = functions.https.onRequest(app);
