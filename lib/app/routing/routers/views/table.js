const express = require('express');
const request = require('request-promise');

module.exports = (() => {

    var router = express.Router();

    router.get('/', (req, res) => {
        res.render('table', { title: "Table View" });
    });

    router.get('/menu', (req, res) => {
        var options = {
            baseUrl: "http://localhost:3000",
            uri: '/api/menu',
            json: true
        };

        request(options)
            .then((menu) => {
                res.render('table/menu', { title: "Menu - Table View", menu: menu });
            })
            .catch((err) => {
                res.render('error', { title: "Error", err: err });
            });
    });

    return router;

})();