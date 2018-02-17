function putCurrentPage (req, res, next)
{
    res.locals.currentPage = req.path;
    next();
};

var apply = exports.apply = function (app)
{
    app.use(putCurrentPage);
};