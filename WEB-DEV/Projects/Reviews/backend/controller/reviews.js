const Review = require("../model/postSchema");

const getAllReviews = async (req,res)=>{
    const data = await Review.find();
    res.json(data)
}

module.exports = {
    getAllReviews
}