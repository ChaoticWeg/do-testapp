var apply = exports.apply = function (app)
{
    app.get('/', (req, res) => {
        res.render('index');
    });
};
