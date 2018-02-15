const rfs    = require('rotating-file-stream');
const morgan = require('morgan');

var getFileLogger = exports.getFileLogger = function ()
{
    var logStream = rfs('requests.log', {
        size: '10M',
        interval: '1d',
        path: 'logs'
    });

    return morgan('combined', { stream: logStream });
};

var getConsoleLogger = exports.getConsoleLogger = function () 
{
    var level = process.env['NODE_LOGLEVEL'] || "tiny";
    return morgan(level);
};
