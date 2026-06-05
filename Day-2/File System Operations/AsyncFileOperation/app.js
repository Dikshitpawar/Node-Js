

const fs = require('fs');


// 1) fs.readFile
// fs.readFile('../demo.txt' , 'utf-8' , (err,data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data)
// })




// 2)fs.writeFile
// fs.writeFile('../demo.txt' , 'Learn Async operation' , (err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//         console.log("Successfull.")
// })




// 3)fs.appendFile
// fs.appendFile("../demo.txt" , "Learn Async operation" , (err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("Sucessfull")
// })





// 4) unlink
// fs.unlink("../tp.txt" , (err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("Deleted successfully");
// })




// 5) mkdir
// fs.mkdir("Async" , {recursive:true} , (err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("Created");
// })





// 6)rmdir
// fs.rmdir("../Async" , {recursive:true} , (err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("Deleted");
// })




// 7) rm
// fs.rm('../demo.txt' , {recursive:true} , (err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("Deleted");
// })






// 8) fs.rename
// fs.rename("app.js" , "async.js" , (err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("Sucess");
// })