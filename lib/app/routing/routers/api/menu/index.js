const express = require('express');

module.exports = (() => {

    var router = express.Router();

    router.get('/', (req, res) => {
        res.json(require('./menu.json'));
    });

    return router;

})();