const express = require('express');

const _VIEWS = [ 'kitchen', 'manager', 'staff', 'table' ];

const VIEWS = {
    'kitchen': { title: "Kitchen View" },
    'manager': { title: "Manager View" },
    'staff'  : { title: "Staff View" }
};

module.exports = (() => {

    var router  = express.Router({ mergeParams: true });

    router.use('/table', require('./table'));

    router.route('/:which').get((req, res) => {

        var which = req.params.which;

        if (VIEWS.hasOwnProperty(which))
            return res.render(which, VIEWS[which]);
        
        return res.render('error', {
            err: {
                message: "Unknown view \"" + req.params.which + "\""
            }
        });

    });

    return router;

})();