const express = require("express");

// set up express app
const app = express();

app.use('/api', require("./routes/apis"));

// listen for requests
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Now listening for requests");
});
