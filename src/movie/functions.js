const Movie = require("./model");

exports.addMovie = async (titleStr, actorStr, ratingStr) => { //dry version title, actor
    try {
        await Movie.create({title: titleStr, actor: actorStr, rating: ratingStr}); //dry version ({title, actor}) - short object notation
        return "Successfully added a new movie.";
    } catch (error) {
        console.log(error)
    }
}

exports.list = async () => {
    try {
        return await Movie.find({});
    } catch (error) {
        console.log(error);
    }
};

exports.deleteOne = async (title) => {
    try {
        await Movie.deleteOne({title: title});
        console.log("Movie successfully removed.")
    } catch (error) {
        console.log(error);
    }
};

exports.update = async (title, actor) => {
    try {
        await Movie.updateOne(
            {title: title},
            {$set:{actor: actor}}
        )
            return "Actor updated."
    } catch (error) {
        console.log(error);
    }
};