const express = require("express");
const app = express();
const mongoose = require("mongoose")
require("dotenv").config();
const router = require("./routes/router")
const cookieParser = require("cookie-parser");

const cors = require("cors");
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials : true
}
app.use(cookieParser())
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

app.use("/api",router)


