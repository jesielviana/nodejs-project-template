"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _winston = require("winston");

var _winstonDailyRotateFile = _interopRequireDefault(require("winston-daily-rotate-file"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var logDir = 'logs';

if (!_fs["default"].existsSync(logDir)) {
  _fs["default"].mkdirSync(logDir);
}

var logger = (0, _winston.createLogger)({
  transports: [new _winston.transports.Console({
    format: _winston.format.combine(_winston.format.colorize(), _winston.format.align(), _winston.format.simple()),
    level: 'debug'
  }), new _winstonDailyRotateFile["default"]({
    filename: "".concat(logDir, "/log.log"),
    format: _winston.format.combine(_winston.format.timestamp(), _winston.format.simple()),
    datePattern: 'YYYY-MM-DD',
    maxSize: '20m',
    maxFiles: '30d',
    level: 'info'
  }), new _winston.transports.File({
    filename: "".concat(logDir, "/error.log"),
    level: 'error',
    format: _winston.format.combine(_winston.format.simple())
  })]
});
var _default = logger;
exports["default"] = _default;