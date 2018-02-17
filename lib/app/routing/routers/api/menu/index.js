const express = require('express');

const menu = require('./menu.json');

module.exports = (() => {

    var router = express.Router();

    router.get('/', (req, res) => {
        res.json(menu);
    });

    return router;

})();