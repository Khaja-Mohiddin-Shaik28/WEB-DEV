const express = require("express")
const router = express.Router();
const {getAllReviews} = require("../controller/reviews")

router.get("/", getAllReviews);
module.exports = router