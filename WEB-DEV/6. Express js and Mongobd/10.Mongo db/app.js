const express = require('express');
const mongoose = require("mongoose");
const Blog = require("./models/blog")
const app = express();

// database URL
const dbURL = "mongodb+srv://test:1234@cluster.2ied0un.mongodb.net/node-blogs?retryWrites=true&w=majority&appName=Cluster";

mongoose.connect(dbURL)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err))

// app.get("/add-blog",(req, res)=>{
//   const blog = new Blog({
//     title : "Blog title",
//     snippet : "Blog snippet",
//     body : "Blog body"
//   });
//   blog.save()
//     .then((result)=>{
//       res.send(result);
//     })
//     .catch((err)=>{
//       console.log(err)
//     })
// });

// app.get("/all-blogs",(req, res)=>{
//   Blog.find() 
//     .then((result) => res.send(result))
//     .catch((err) => console.log(err))
// })
// app.get("/single-blog",(req, res)=>{
//   Blog.findById("663f50782e8beb9495823df1") 
//     .then((result) => res.send(result))
//     .catch((err) => console.log(err))
// })

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get('/', (req, res) => {
  Blog.find().sort({createdAt : -1})
    .then((result) =>{
      res.render("index", {title : "Home", blogs : result});
    }
  )
  .catch((err) =>console.log(err))
  
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});


app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});


