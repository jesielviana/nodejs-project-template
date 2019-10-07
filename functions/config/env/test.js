"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Config = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Config = function Config() {
  _classCallCheck(this, Config);

  this.env = 'test';
  this.PORT = 3000;
  this.API_BASE = '/api';
  var DB_HOST = process.env.DB_HOST ? process.env.DB_HOST : 'localhost';
  var DB_PORT = process.env.DB_PORT ? process.env.DB_PORT : '27017';
  this.MONGODB_URL = "mongodb://".concat(DB_HOST, "':'").concat(DB_PORT, "/db_test");
};

exports.Config = Config;