import '@babel/polyfill';
// eslint-disable-next-line import/no-unresolved
// import * as functions from 'firebase-functions';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes';
import Config from './config/config';

const app = express();

app.use(cors());
app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(Config.API_BASE, routes);


app.listen(3000, () => console.log('online'));

// export default functions.https.onRequest(app);
