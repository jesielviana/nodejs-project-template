const DailyRotateFile = require('winston-daily-rotate-file');
const fs = require('fs');

const winston = require('winston');

const logDir = 'logs';

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const logger = winston.createLogger({
  transports: [
    new (winston.transports.Console)({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.align(),
        winston.format.simple(),
      ),
      level: 'debug',
    }),
    new DailyRotateFile({
      filename: `${logDir}/log.log`,
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.simple(),
      ),
      datePattern: 'YYYY-MM-DD',
      maxSize: '20m',
      maxFiles: '30d',
      level: 'info',
    }),
    new winston.transports.File({
      filename: `${logDir}/error.log`,
      level: 'error',
      format: winston.format.combine(
        winston.format.simple(),
      ),
    }),
  ],
});

module.exports = logger;
