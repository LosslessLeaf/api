const express = require("express");
const router = express.Router();
const User = require("../models/user");


// get a list of users from the db
router.get("/users", function(req, res, next) {
    User.find({}).then(function(users){
        res.send(users);
    });
    // User.aggregate([{$geoNear: {
    //   near: {
    //       type: "Point",
    //       coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)],
    //       spherical: true,
    //       maxDistance: 100000,
    //       distanceField: "dist.calculated"
    //   }
    // }}]).then(function(users){
    //     res.send(users);
    // });
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
    User.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        User.findOne({_id:req.params.id}).then(function(user){
            res.send(user);
        });
    });
});

// delete a user in the db
router.delete("/users/:id", function(req, res, next) {
    User.findByIdAndRemove({_id: req.params.id}).then(function(user){
       res.send(user); 
    });
});


module.exports = router;
