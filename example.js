var app = new require('express')(); // npm install express

app.get("/", function(req, res) {
    res.send("<a href='/fuck'>Noobs</a>");
    console.log( "connection from: " + req.ip );
});

app.get("/fuck", function(req, res) {
    var now = new Date();
    res.send( "You requested fuck at: " + now );
    console.log( "fuck at: " + now );
});

app.listen(1337);

