const fs = require("fs");

// Prints data in chunks
// It creates a streams, function [path, endcoing to string]
// const readStream = fs.createReadStream("./dummy.txt", {encoding: "utf8"});

// // It fires the event which is getting data and prints in chunks
// readStream.on("data", (chunk)=>{
//     console.log("---NEW CHUNK---");
//     // console.log(chunk.toString());
//     console.log(chunk);
// })

// Writing 

// const readStream = fs.createReadStream("./dummy.txt", {encoding: "utf8"});
// const writeStream = fs.createWriteStream("./dummy2.txt");

// readStream.on("data", (chunk)=>{
//     console.log("---NEW CHUNK---");
//     console.log(chunk);
//     writeStream.write("\nNew chunk \n");
//     writeStream.write(chunk);
// })


// Shortcut Piping

const readStream = fs.createReadStream("./dummy.txt", {encoding: "utf8"});
const writeStream = fs.createWriteStream("./dummy2.txt");

readStream.pipe(writeStream);
