import { createLogger, format, transports } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import fs from 'fs';

const logDir = 'logs';

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const logger = createLogger({
  transports: [
    new (transports.Console)({
      format: format.combine(
        format.colorize(),
        format.align(),
        format.simple(),
      ),
      level: 'debug',
    }),
    new DailyRotateFile({
      filename: `${logDir}/log.log`,
      format: format.combine(
        format.timestamp(),
        format.simple(),
      ),
      datePattern: 'YYYY-MM-DD',
      maxSize: '20m',
      maxFiles: '30d',
      level: 'info',
    }),
    new transports.File({
      filename: `${logDir}/error.log`,
      level: 'error',
      format: format.combine(
        format.simple(),
      ),
    }),
  ],
});

export default logger;
