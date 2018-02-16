var apply = exports.apply = function (app)
{
    app.use(putCurrentPage);

    app.get('/', (req, res) => {
        res.render('index', {
            title: 'Home'
        });
    });

    app.get('/table', (req, res) => {
        res.render('table', {
            title: 'Table View'
        });
    });

    app.get('/staff', (req, res) => {
        res.render('staff', {
            title: 'Staff View'
        });
    });

    app.get('/kitchen', (req, res) => {
        res.render('kitchen', {
            title: 'Kitchen View'
        });
    });

    app.get('/manager', (req, res) => {
        res.render('manager', {
            title: 'Back Office View'
        });
    });
};

function putCurrentPage(req, res, next)
{
    res.locals.currentPage = req.path;
    next();
};