const mongoose = require("mongoose");

// below is Andy's schema naming convention - be consistant with yourself if different
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    actor: {
        type: String,
        default: "Actor not specified",
    },
    rating: {
        type: String,
        default: "Rating not specified"
    },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;