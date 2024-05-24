const Article = require("../model/article");
const express = require("express");
const app = express();

// To accept json from fetch api
app.use(express.json());

// To get parameters
app.use(express.urlencoded({ extended: true }));

const getAllArticles = async(req, res)=>{
    const articles  = await Article.find();
    res.status(200).json(articles)
}

const getOneArticle = async(req,res)=>{
    const id = req.params.id;
    const data = await Article.findById(id);
    res.json(data);
}

const updateArticle = async(req, res)=>{
    try{
        const id = req.params.id;
        const data = req.body;
        await Article.findByIdAndUpdate(id,data);
        res.status(201).json({
            success : true,
            message: "Article updated successfully",
        });
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: "An error occurred while udpating the article",
        });
    }
    
}

const addArticle = async(req, res)=>{
    try{

        const data = new Article(req.body);
        const result = await data.save();
        res.status(201).json({
            success : true,
            message: "Article created successfully",
            article: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "An error occurred while creating the article",
            error: error.message
        });
    }
}


const deleteArticle = async(req, res)=>{
    try{
        const id = req.params.id;
        await Article.findByIdAndDelete(id);
        res.status(201).json({
            success : true,
            message : "Article deleted successfully",
        })
    }
   catch(err){
    res.status(500).json({
        success : false,
        message : "Article not deleted successfully",
    })
   }
}

module.exports = {
    getAllArticles,
    addArticle,
    getOneArticle,
    updateArticle,
    deleteArticle
}