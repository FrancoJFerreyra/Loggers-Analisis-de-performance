import winston from 'winston';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const _loggerW = winston.createLogger({
	format: winston.format.combine(winston.format.simple()),
	transports: [
		new winston.transports.Console({ level: 'info' }),
		new winston.transports.File({
            maxsize: 512000,
            maxFiles: 1,
			filename: `${__dirname}/../logs/error.log`,
			level: 'error',
		}),
		new winston.transports.File({
            maxsize: 5120000,
            maxFiles: 1,
			filename: `${__dirname}/src/logs/warn.log`,
			level: 'warn',
		}),
	],
});

export default _loggerW;
