//This is the model which uses a schema to create and edit Mongo documents
const mongoose = require('mongoose');

let instructorSchema = new mongoose.Schema({
    firstname: String,
    surname: String,
    age: Number,
    belt: String,
    stripe: Number,
    year: String
});

module.exports = mongoose.model('Instructor', instructorSchema)