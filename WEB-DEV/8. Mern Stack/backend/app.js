const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const articleRouter  = require("./routes/articles"); 
const app = express();
const Article = require("./model/article");
const cors = require("cors");

const corsOptions = {
    origin: 'http://localhost:5173'
}
app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const dbConnection = async ()=>{
    try{
        await mongoose.connect(process.env.dbURL);
        app.listen(process.env.PORT);
    }
    catch(err){
        console.log(err)
    }

} 
dbConnection();


app.get("/", async(req, res)=>{
    res.redirect("/api/articles/");
})

app.use("/api/articles",articleRouter);