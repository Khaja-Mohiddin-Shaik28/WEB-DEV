const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    userName : {
        type : "String",
        required : true
    },
    title : {
        type : "String",
        required : true
    },
    body : {
        type : "String",
        required : true
    }
}, {timestamps : true});


module.exports = mongoose.model("Article",articleSchema);