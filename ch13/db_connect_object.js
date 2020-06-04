var MongoClient = require('mongodb').MongoClient;
var Server = require('mongodb').Server;
// var client = new MongoClient(); // not working
var client = MongoClient;
client.connect('mongodb://dbadmin:test@localhost:27017/', {
     poolSize: 5, reconnectInterval: 500
},
function(err, db) {
    if (err) {
        console.log("Connection Failed Via Client Object.");
        console.log(JSON.stringify(err));
    } else { 
        var tmp_db = db.db("admin");
    } if (db) {
        console.log("Connected Via Client Object . . .");
        db.logout(function(err, result) {
            if (!err) {
                console.log("Logged out Via Client Object . . .");
            }
            db.close();
            console.log("Connection closed . . .");
        });
        // not working
        /*db.authenticate("dbadmin", "test", function(err, results) {
            if (err) {
                console.log("Authentication failed . . .");
                db.close();
                console.log("Connection closed . . .");
            } else { 
                console.log("Authenticated Via Client Object . . .");
                db.logout(function(err, result) {
                    if (!err) {
                        console.log("Logged out Via Client Object . . .");
                    }
                    db.close();
                    console.log("Connection closed . . .");
                });
            }
        });*/
    }
});