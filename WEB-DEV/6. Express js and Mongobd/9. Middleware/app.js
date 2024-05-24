const express = require('express');
const morgan = require('morgan');


const app = express();


app.listen(3000);


app.set('view engine', 'ejs');

// Code which runs(on the server) between getting a request and sending a response is called Middleware

// This is used to log data and to move to next middleware func we need to specify next()
// app.use((req, res,next)=>{
//   console.log(req.url);
//   console.log(req.hostname);
//   console.log(req.method);
//   next();
// })

// We can use thirdparty middleware for this
// app.use(morgan("dev"))
// app.use(morgan("tiny"))


// To render static pages like css or images it is not possible so we use express.static middleware

app.use(express.static("public"));

app.get('/', (req, res) => {
  const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];
  res.render('index', { title: 'Home', blogs });
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

