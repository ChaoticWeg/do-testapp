const subrouters = {
    '/view' : require('./routers/views'),
    '/api'  : require('./routers/api')
};

var apply = exports.apply = function (app)
{   
    for (path in subrouters)
    {
        console.log('using subrouter for %s', path);
        app.use(path, subrouters[path]);
    }

    app.get('/', (req, res) => { res.render('index', { title: 'Home' }); });
};
