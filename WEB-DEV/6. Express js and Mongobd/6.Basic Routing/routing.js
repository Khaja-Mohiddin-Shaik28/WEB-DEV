// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   let path = "./views/";
//   switch (req.url) {
//     case "/":
//       path += "home.html";
//       res.statusCode = 200;
//       break;

//     case "/about":
//       path += "about.html";
//       res.statusCode = 200;
//       break;
//     default:
//       path += "404.html";
//       res.statusCode = 404;
//       break;
//   }

//   fs.readFile(path, (err, data) => {
//     if (err) {
//       console.log(err);
//       res.end();
//     } else {
//       res.end(data);
//     }
//   });
// });

// server.listen(3000, "localhost", () => {
//   console.log("listening...");
// });

// Status code 200 - OK
// Status code 301 - Resourse moved
// Status code 404 - Error
// Status code 500 - Internal Server Error


// Redirecting

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "home.html";
      res.statusCode = 200;
      break;

    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
        res.statusCode = 301;
        res.setHeader("location", "/about");
        res.end();
        break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening...");
});

// nodemon to prevent restarting server
// nodeman filename

// npm init creates package.json it has all the dependencies in script
// To check u can install lodash dependancy to local project and it automatically adds it to script
// and it is installed in node modules

// While sharing our repo node_modules is not shared so we just do npm install