
var log4js = require('log4js');
var config = require('./log4js.json');

log4js.configure(config);

console.log('log4js start');

var logFile = log4js.getLogger('log_date');

logFile.trace('this is a log4js trace');
logFile.debug('this is a log4js debug');
logFile.info('this is a log4js info');
logFile.warn('this is a log4js warn');
logFile.error('this is a log4js error');
logFile.fatal('this is a log4js fatal');
