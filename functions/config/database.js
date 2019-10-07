"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_mongoose["default"].Promise = Promise;
var mongodbUrl = _config["default"].MONGODB_URL;
var configuracoes = {
  useNewUrlParser: true,
  useFindAndModify: false // user: 'database_user',
  // pass: 'user_password',
  // auth: {
  //     authdb: 'admin'
  // }

};

var connect = function connect() {
  return _mongoose["default"].connect(mongodbUrl, configuracoes);
};

var _default = {
  connect: connect
};
exports["default"] = _default;