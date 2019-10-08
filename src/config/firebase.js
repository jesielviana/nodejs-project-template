import admin from 'firebase-admin';
// eslint-disable-next-line import/no-unresolved
const serviceAccount = require('./firebase-key.json');

const firebaseApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://ppr-id.firebaseio.com',
});

export default firebaseApp;
