const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const directorSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: Number,
});

const Directors = mongoose.model('Director', directorSchema);
module.exports = Directors;