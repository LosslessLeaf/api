const express = require("express");
const router = express.Router();
const User = require("../models/user");


// get a list of users from the db
router.get("/users", function(req, res, next) {
    res.send({ type: "GET" });
});

// add a new user to the db
router.post("/users", function(req, res, next) {
    User.create(req.body).then(function(user) {
            console.log(user);
            res.send(user);
    }).catch(next);
});

// update a user in the db
router.put("/users/:id", function(req, res, next) {
    res.send({ type: "PUT" });
});

// delete a user in the db
router.delete("/users/:id", function(req, res, next) {
    res.send({ type: "DELETE" });
});


module.exports = router;
