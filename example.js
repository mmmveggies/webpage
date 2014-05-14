var app = new require('express')(); // npm install express

app.get("/", function(req, res) {
    res.send( "<a href='/something_else'>Click here for something else!</a>" );
    console.log( "connection from: " + req.ip );
});

app.get("/something_else", function(req, res) {
    var now = new Date();
    res.send( "<h1>You requested something else at: " + now + "</h1>" );
    console.log( req.ip + " requested something else at: " + now );
});

app.listen(1337);

