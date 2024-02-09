import * as winston from 'winston';
import 'winston-daily-rotate-file';
// import * as SlackHook from 'winston-slack-webhook-transport';
// import * as winstonMongoDB from 'winston-mongodb';

// Create transports instance
const transports = [
  new winston.transports.Console({
    format: winston.format.combine(
      // Add a timestamp to the console logs
      winston.format.timestamp(),
      // Add colors to you logs
      winston.format.colorize(),
      // What the details you need as logs
      winston.format.printf(({ timestamp, level, message, context, trace }) => {
        return `${timestamp} [${context}] ${level}: ${message}${trace ? `\n${trace}` : ''}`;
      }),
    ),
  }),
];

// Create and export the logger instance
export const logger = winston.createLogger({
  level: 'info',
  defaultMeta: { service: 'user-service' },
  format: winston.format.json(),
  transports,
});
