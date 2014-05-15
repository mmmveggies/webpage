var exp = require('express'),
    hbr = require('express3-handlebars'),

    app = new exp();

// Rendering .handlebars files
// By default, looks for them in __dirname + '/views'
app.engine( 'handlebars', hbr() );
app.set( 'view engine', 'handlebars' );

// Serving static files
app.use( '/css', exp.static(__dirname + '/css') );

// Example data
var data = require('./data/test.json');

// Landing page
app.get('/', function(req, res) {

    res.render( 'index', data );

});


app.listen(1337);
