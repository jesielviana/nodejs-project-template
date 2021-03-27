class Config {
  constructor () {
    this.env = 'production'
    this.PORT = 3000
    this.API_BASE = '/api'
    this.MONGODB_URL =
      'mongodb://upucxxkhq2vmykapvgxp:VKuZVNDp6cNElfVF2IlK@bwcnupplrmojfvk-mongodb.services.clever-cloud.com:27017/bwcnupplrmojfvk'
  }
}

module.exports = new Config()
