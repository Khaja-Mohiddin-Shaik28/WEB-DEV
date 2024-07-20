const { models } = require("mongoose");

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    name : {
        type : String
    }
});

module.exports = mongoose.model("Image", imageSchema)