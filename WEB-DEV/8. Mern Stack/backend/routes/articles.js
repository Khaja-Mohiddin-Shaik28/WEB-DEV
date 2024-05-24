const express = require("express");
const router = express.Router();
const {getAllArticles,addArticle,getOneArticle,updateArticle,deleteArticle} = require("../controller/articles");


router.get("/",getAllArticles)
router.post("/", addArticle)
router.get("/:id",getOneArticle)
router.patch("/:id", updateArticle)

router.delete("/:id", deleteArticle)

module.exports = router;