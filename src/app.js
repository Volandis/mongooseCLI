
require("./db/connection");
const mongoose = require("mongoose");
const yargs = require("yargs");
const { addMovie, list, deleteOne, update } = require("./movie/functions");

const app = async (yargsObj) => {
  try {
    if (yargsObj.add) {
      console.log(await addMovie(yargsObj.title, yargsObj.actor, yargsObj.rating));
      //add functionality
    } else if (yargsObj.list) {
      console.log(await list());
      //list functionality
    } else if (yargsObj.delete) {
      await deleteOne(yargsObj.title);
      //delete functionality
    } else if (yargsObj.update) {
      console.log(await update(yargsObj.title, yargsObj.actor))
    } else {
      console.log("Incorrect command");
    }
    await mongoose.disconnect();
  } catch (error) {
    console.log(error);
  }
};

app(yargs.argv);