
const fs = require('fs');


//copy operation

//using async
// fs.copyFile('../demo.txt' , '../temp.txt' , (err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("copies successfully.!");
// })


//using sync
// fs.copyFileSync("../demo.txt" , '../temp.txt');
// console.log("copied")






//Rename:

//async

// fs.rename("app.js" , "tp.js" , (err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("Renamed");
// })

//sync

// fs.renameSync("tp.js" , "app.js");
// console.log("Renamed");



//rename + moved

// fs.mkdir("../tp" , (err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log("Created")
// })

// fs.rename("app.js" , "../tp/tp.js" , (err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("renamed + moved")
// })




//delete

// async 

// fs.unlink("../temp.txt" , (err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("Removed")
// })


//sync

// fs.unlinkSync("../temp.txt");
// console.log("removed");




