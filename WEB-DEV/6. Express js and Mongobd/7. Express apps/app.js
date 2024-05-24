const express = require("express");

const app = express();

app.listen(3000);

app.get("/", (req, res)=>{
    // res.send("<h1>HOME PAGE</h1>");

    // Second parameter is necessart\y as sendFile requires absolute path
    // statusCode setHeader are automatically applied according though for statusCode we need to manually update sometimes
    res.sendFile("./views/home.html", {root : __dirname});
})

app.get("/about", (req, res)=>{
   
    res.sendFile("./views/about.html", {root : __dirname});
})

// redirects
app.get("/about-me", (req, res)=>{
    res.redirect("./views/about.html", {root : __dirname});
});

// 404 page
app.use((req, res)=>{
    res.status(404).sendFile("./views/404.html", {root : __dirname})
})  

// use is a middleware concept
// Place the 404 page at the end because it lacks a specific path. This ensures that Express will 
// search for get requests sequentially. By positioning it at the end, it will automatically execute 
// when no desired URL is found.

// status(404) returns res object again so we can chain it.
