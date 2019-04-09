//This is the model which uses a schema to create and edit Mongo documents
const mongoose = require('mongoose');

let fighterSchema = new mongoose.Schema({
    firstname: String,
    surname: String,
    age: Number,
    belt: String,
    stripe: Number
});

module.exports = mongoose.model('Fighter', fighterSchema);