class Config {
  constructor() {
    this.env = 'test';
    this.PORT = 3000;
    this.API_BASE = '/api';
    const DB_HOST = process.env.DB_HOST ? process.env.DB_HOST : 'localhost';
    const DB_PORT = process.env.DB_PORT ? process.env.DB_PORT : '27017';
    this.MONGODB_URL = `mongodb://${DB_HOST}':'${DB_PORT}/db_test`;
  }
}

module.exports = new Config();
