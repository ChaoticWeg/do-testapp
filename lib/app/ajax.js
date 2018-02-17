const Promise = require('bluebird');
const Request = require('request-promise');


const USER_AGENT = "DO_testapp";


var get = exports.get = function (uri)
{
    var options = {
        uri: uri,
        headers: {
            'User-Agent': USER_AGENT
        },
        json: true
    };

    return Request(options);
};