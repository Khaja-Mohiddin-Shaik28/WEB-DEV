const mongoose = require("mongoose");
const { describe } = require("node:test");
const { type } = require("os");

const Scheme = mongoose.Schema;

const pendingSchema = new Scheme({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : false
    }
}, {timestamps : true});

const completedSchema = new Scheme({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : false
    }
}, {timestamps : true});


const Pending = mongoose.model("Pending",pendingSchema);
const Completed = mongoose.model("Completed",completedSchema);

module.exports = {
    Pending,
    Completed
}
    ;