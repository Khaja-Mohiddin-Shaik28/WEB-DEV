require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routes/reviews") 

const cors = require("cors")

const corsOrigin = {
    url : "http://localhost:5173/"
}
app.use(cors(corsOrigin));

const dbConnection = async ()=>{
    try{
        await mongoose.connect(process.env.dbURL)
            app.listen(process.env.PORT)
    }
    catch(err){
        console.log(err);
    }
}
dbConnection();
app.use("/api/reviews",router)