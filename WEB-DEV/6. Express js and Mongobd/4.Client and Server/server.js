const http = require("http");

// req and res are objects when ever req is made it is fired
const server = http.createServer( (req, res)=>{
    console.log("requst is made.");
} );

// Always listens to the req and fires when ever req is made at port no : 3000
server.listen(3000, "localhost", ()=>{
    console.log("listening to the requests")
})


// Run localhost:3000 on browser