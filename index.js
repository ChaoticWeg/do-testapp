const App = require('./lib/app');

const PORT = process.env['PORT'] || 3000;

console.log('running in %s mode', process.env.NODE_ENV);

var app = App.getInstance();
app.listen(PORT, () => console.log('listening on port %d', PORT));

