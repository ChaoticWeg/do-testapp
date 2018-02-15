const express = require('express');

const Logging = require('./logging.js');
const Routing = require('./routing.js');

const LOGLEVEL = process.env['NODE_LOGLEVEL'] || 'dev';


function create()
{
    var app = express();

    // middleware
    app.use(Logging.getFileLogger());
    app.use(Logging.getConsoleLogger());
    app.use(express.static('static'));

    // config
    app.set('view engine', 'pug');
    app.set('views', 'views');

    // routing
    Routing.apply(app);

    return app;
}


/* instancing */
var _instance = null;
var getInstance = exports.getInstance = function () { return _instance || (_instance = create()); }
