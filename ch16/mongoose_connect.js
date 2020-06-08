var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/words");
mongoose.connection.on("open", function() {
    console.log(mongoose.connection.collection);
    // mongoose.connection.db.collectionNames(function(err, names) { // depecated
    mongoose.connection.db.listCollections(function(err, names) {
        if(err) console.log(JSON.stringify(err));
        console.log("test");
        console.log(names);
        mongoose.disconnect();
    });
});