const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const fighterModel = require('../models/fighter');
const instructorModel = require('../models/instructor');

const mongodb = 'mongodb://localhost:27017/bjj';
mongoose.connect(mongodb, {useNewUrlParser: true})
.then(() => {
    console.log("CONNECTED.");
});

router.get('/fighters', (req, res) => {
    fighterModel
        .find()
        .then(doc => {
            console.log("All Fighter Details:", doc)
            res.send(doc);
        })
        .catch(err => {
            console.error(err)
        });
});

router.get('/instructors', (req, res) => {
    instructorModel
        .find()
        .then(doc => {
            console.log("All Instructor Details:", doc)
            res.send(doc);
        })
        .catch(err => {
            console.error(err)
        });
});


router.get('/fighter/:id', (req, res) => { 
    fighterModel
        .find({_id: req.params.id}) 
        .then(doc => {   
            console.log("Selected Fighter Details:", doc)
            res.send(doc);
        })
        .catch(err => {
            console.error(err)
        });
});


router.get('/instructor/:id', (req, res) => { 
    instructorModel
        .find({_id: req.params.id}) 
        .then(doc => {   
            console.log("Selected Fighter Details:", doc)
            res.send(doc);
        })
        .catch(err => {
            console.error(err)
        });
});


router.post('/add-fighter', (req, res) => { console.log(req.body);
    let fighter = new fighterModel({
        "firstname": req.body.firstname,
        "surname": req.body.surname,
        "age": req.body.age,
        "belt": req.body.belt,
        "stripe": req.body.stripe
    });

    fighter.save() 
        .then(doc => {
            console.log(doc);
        })
        .catch(err => {
            console.error(err)
        });
    res.send(console.log("working!!!!"));
});


router.post('/add-instructor', (req, res) => { console.log(req.body);
    let instructor = new instructorModel({
        "firstname": req.body.firstname,
        "surname": req.body.surname,
        "age": req.body.age,
        "belt": req.body.belt,
        "stripe": req.body.stripe,
        "year":req.body.year
    });

    instructor.save()
        .then(doc => {
            console.log(doc);
        })
        .catch(err => {
            console.error(err)
        });
    res.send(console.log("working!!!!"));
});



router.put('/update-fighter', (req, res) => {
    console.log("req.body: ", req.body);
    fighterModel.findByIdAndUpdate(req.body._id, { $set: {firstname: req.body.firstname, surname: req.body.surname, age: req.body.age, belt: req.body.belt, stripe: req.body.stripe}}, {new: true}, function (err, fighterModel) {
        if (err) return handleError(err);
        res.send(fighterModel);
    });
});


router.put('/update-instructor', (req, res) => {
    console.log("req.body: ", req.body);
    instructorModel.findByIdAndUpdate(req.body._id, { $set: {firstname: req.body.firstname, surname: req.body.surname, age: req.body.age, belt: req.body.belt, stripe: req.body.stripe, year: req.body.year}}, {new: true}, function (err, fighterModel) {
        if (err) return handleError(err);
        res.send(instructorModel);
    });
});


router.delete('/delete-fighter/:id', (req, res) => {
    fighterModel.deleteOne({_id: req.params.id}, function(err){
        if(err) return handleError(err);
        console.log("Deleted fighter with ObjectId: ", req.params.id);
        fighterModel
            .find()
            .then(doc => {
                console.log("All Fighter Details Returned as part of Delete data refesh process:", doc)
                res.send(doc);
            })
            .catch(err => {
                console.error(err)
            })
    });
});


router.delete('/delete-instructor/:id', (req, res) => {
    instructorModel.deleteOne({_id: req.params.id}, function(err){
        if(err) return handleError(err);
        console.log("Deleted instructor with ObjectId: ", req.params.id);
        instructorModel
            .find()
            .then(doc => {
                console.log("All instructor Details Returned as part of Delete data refesh process:", doc)
                res.send(doc);
            })
            .catch(err => {
                console.error(err)
            })
    });
});



module.exports = router;
