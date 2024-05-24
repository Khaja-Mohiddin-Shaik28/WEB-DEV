// Operations are asynchronous
const fs = require("fs");

// Reading Files
// fs.readFile("./blogs/blog1.txt", (err, data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         // console.log(data); buffer data
//         console.log(data.toString());
//     }
// });



// Writing Files

// fs.writeFile("./blogs/blog.txt","Hello Khaja", (err)=>{
   
//    if(err){
//     console.log(err.message)
//    }
//         console.log("File is written");
  
// });

// If there is no file it will create it



// Creating and deleting directory 

// if(!(fs.existsSync("./assets")))
//     {
//         fs.mkdir("./assets",()=>{
//             console.log("Folder Created")
//         });
                
//     }else{
//         fs.rmdir("./assets",()=>{
//             console.log("Folder deleted")
//         })
//     }

// Removing a file

if(fs.existsSync("./assets/file.txt")){
    // No error if file does not exist
    fs.unlink("./assets/file.txt",()=>{      
            console.log("File deleted.")
    })
}else{
    console.log("File does not exists.")
}
