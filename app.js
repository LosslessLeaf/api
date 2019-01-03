const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// set up express app
const app = express();

// connect to mongodb
mongoose.connect("mongodb://localhost/firstuserdb", {useNewUrlParser:true});
mongoose.Promise = global.Promise;



app.use(bodyParser.json());
app.use("/api", require("./routes/apis"));

// listen for requests
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Now listening for requests");
});
