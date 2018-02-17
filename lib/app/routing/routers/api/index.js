const express = require('express');

const subrouters = {
    '/menu': require('./menu/index.js')
};

module.exports = (() => {

    var router = express.Router();

    for (var path in subrouters)
    {
        console.log('using subrouter for /api%s', path);
        router.use(path, subrouters[path]);
    }

    return router;

})();