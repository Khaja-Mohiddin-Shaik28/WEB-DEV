const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");
const Image = require("./model/image")
const mongoose = require("mongoose");
const corsOptions = {
    origin: 'http://localhost:5173',
}
app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
const dbConnection = async (req,res)=>{
  await mongoose.connect("mongodb+srv://test:1234@cluster.yhntfbp.mongodb.net/image-data?retryWrites=true&w=majority&appName=Cluster")
  app.listen(3000)
}
dbConnection();
const storage = multer.diskStorage({
    destination :  function (req, file, cb){
        return cb(null, "./public/images")
    },
    filename : function (req, file, cb){
        return cb(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage})

app.post("/api/upload", upload.single("file"), async (req, res) => {
    try {
      const imageData = new Image({name : req.file.filename});
      await imageData.save();
      res.status(201).json("File uploaded successfully!");

    } catch (err) {
      console.error(err);
      res.status(500).json("Error uploading file!");
    }
  });

  app.get("/api/getImage", async (req, res)=>{
    try{
      const images = await Image.find();
      res.json({images});
    }
    catch(err){
      console.log(err);
    }
  })
