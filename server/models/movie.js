const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    directorId: String,
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;