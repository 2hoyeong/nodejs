var express = require('express');
var url = require('url');
var app = express();
app.listen(80);
app.get('/image', function(req, res) {
    res.sendfile('arch.jpg', { maxAge: 1, root: './ch18/views/'},
    function(err) {
        if (err) {
            console.log("Error");
            console.log(JSON.stringify(err));   
        } else {
            console.log("Success");
        }
    });
});