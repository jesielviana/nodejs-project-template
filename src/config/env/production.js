class Config {
  constructor() {
    this.env = 'production';
    this.PORT = 3000;
    this.API_BASE = '/api';
    this.MONGODB_URL = 'mongodb://mongoproduser:mongoproduser123@ds339458.mlab.com:39458/nodejs-project-template-prod';
  }
}

module.exports = new Config();
