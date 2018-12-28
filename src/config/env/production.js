export class Config {
  constructor() {
    this.env = 'production';
    this.MONGODB_URL = 'mongodb://@localhost:27017/prod';
    this.PORT = 3000;
  }
}
