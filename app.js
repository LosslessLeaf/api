const express = require('express');


// set up express app
const app = express();


app.get('/api', function(req, res) {
    // when get request fired:
    console.log("GET request");
    // shows object on server
    res.send({ name: "Yoshi" });
});



// listen for requests
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Now listening for requests");
});
