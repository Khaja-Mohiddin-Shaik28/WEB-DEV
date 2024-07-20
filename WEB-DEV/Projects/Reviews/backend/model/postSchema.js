const mongoose = require("mongoose")
const Schema = mongoose.Schema

const postSchema = new Schema({
    title: {
        type: String,
        required: true
      },
      body: {
        type: String,
        required: true
      },
      tags: {
        type: [String],
        required: true
      },
      reactions: {
        likes: {
          type: Number,
          required: true
        },
        dislikes: {
          type: Number,
          required: true
        }
      },
      views: {
        type: Number,
        required: true
      }
       
}, {timestamps : true});

module.exports = mongoose.model("Review", postSchema);