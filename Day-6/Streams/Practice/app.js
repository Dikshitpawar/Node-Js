// Practice Set
// Read a file using stream and print each chunk size.
// Read a file and count total bytes.
// Copy input.txt to output.txt using pipe().
// Create a writable stream and write 5 lines into a file.
// Create a Transform stream that converts text to uppercase.
// Create a Transform stream that converts text to lowercase.
// Read a file and stop reading after 100 bytes.
// Read file1.txt and file2.txt, then merge both into merged.txt.

// Thoda Better Challenge
// Read a file and count how many chunks came.
// Create a Transform stream that adds "Processed: " before every chunk.
// Copy a file using manual data event instead of pipe().
// Use pipeline() to copy one file to another.
// Create a Transform stream that replaces "hello" with "hi".


// 1)

const fs = require('fs')

// const stream = fs.createReadStream('../demo.txt');
// stream.on("data" , (chunk)=>{
//     console.log(chunk.length)
// })
// stream.on("error" , (err)=>{
//     console.log(err)
// })


//2) 

// const stream = fs.createReadStream('../demo.txt');
// let total = 0;
// stream.on("data" , (chunk)=>{
//     total += chunk.length;
// })
// stream.on("end" , ()=>{
//     console.log("Total ===>" , total);
// })
// stream.on("error" , (err)=>{
//     console.log(err);
// })


//3)
// const readStream = fs.createReadStream('../demo.txt');
// const writeStream = fs.createWriteStream("../tp.txt");
// readStream.pipe(writeStream);
// console.log("Done");



//4) 
// const stream = fs.createWriteStream("../temp.txt" , "utf-8");
// stream.write("Hello\n")
// stream.write("Leanring Node js\n")
// stream.write("Learning MongoDB\n")
// stream.write("Learning React\n")
// stream.write("Learning Python\n")
// stream.end();
// stream.on("finish" , ()=>{
//     console.log("Writing Done");
// })
// stream.on("error" , (err)=>{
//     console.log(err)
// })



//5)

// const {Transform} = require('stream')
// const upperCaseTransform = new Transform({
//     transform(chunk,encoding,callback){
//         let upperChunk = chunk.toString().toUpperCase();
//         callback(null , upperChunk);
//     }
// })
// upperCaseTransform.write("helllo");
// upperCaseTransform.on("data" , (chunk)=>{
//     console.log(chunk.toString())
// })






//6)

// const {Transform} = require('stream')
// const lowerCaseTransform = new Transform({
//     transform(chunk,encoding,callback){
//         let upperChunk = chunk.toString().toLowerCase();
//         callback(null , upperChunk);
//     }
// })
// lowerCaseTransform.write("HELLLLO");
// lowerCaseTransform.on("data" , (chunk)=>{
//     console.log(chunk.toString())
// })





//9) Read a file and stop reading after 100 bytes.

// const stream = fs.createReadStream("../demo.txt");
// let total = 0;
// stream.on("data" , (chunk)=>{
//     total += chunk.length
//     if(total >=100){
//         console.log("Stopped")
//         stream.destroy()
//     }
// })





//10) Read file1.txt and file2.txt, then merge both into merged.txt.

// const writeStream = fs.createWriteStream('../tp.txt')
// const readstream1 = fs.createReadStream('../demo.txt');
// const readStream2 = fs.createReadStream('../temp.txt');

// readstream1.pipe(writeStream , {end:false});

// readstream1.on("end" , ()=>{
//     readStream2.pipe(writeStream);
// })
// readStream2.on("end" , ()=>{
//     console.log("Done")
// })




// Read a file and count how many chunks came.

// const stream = fs.createReadStream("../tp.txt");
// let count = 0
// stream.on("data" , (chunk)=>{
//     count++;
// })
// stream.on("end" , ()=>{
//     console.log("Total chunks ===>" , count)
// })





// Create a Transform stream that adds "Processed: " before every chunk.

// const {Transform} = require("stream")
// const trans = new Transform({
//     transform(chunk,encoding,callback){
//         let data = "Processed: " + chunk.toString()
//         callback(null , data)
//     }
// })

// trans.write("Helllo")
// trans.write("Learning...");
// trans.end()

// trans.on("data" , (chunk)=>{
//     console.log(chunk.toString());
// })






// Copy a file using manual data event instead of pipe().

// const readStream = fs.createReadStream('../demo.txt' , "utf-8");
// const writeStream = fs.createWriteStream("../tp.txt" , "utf-8");

// readStream.on("data" , (chunk)=>{
//     writeStream.write(chunk)
// })
// readStream.on("end" , ()=>{
//     writeStream.end();
// })
// writeStream.on("finish" , ()=>{
//     console.log("Done")
// })








// Create a Transform stream that replaces "hello" with "hi".
// const {Transform} = require('stream')
// const replaceTransform = new Transform({
//     transform(chunk,encoding,callback){
//         let answer = chunk.toString().replace("hello" , "hi");
//         callback(null, answer)
//     }
// })

// replaceTransform.write("hello how are you");
// replaceTransform.on("data" , (chunk)=>{
//     console.log(chunk.toString());
// })



// Use pipeline() to copy one file to another.

// const  {pipeline} = require('stream')
// const readStream = fs.createReadStream("../demo.txt");
// const writeStream = fs.createWriteStream('../tp.txt');

// pipeline(readStream,writeStream,(err)=>{
//     if(err){
//         console.log("Error:" , err);
//     }else{
//         console.log("Copied Successfully.!")
//     }
// })




//Uppercase File Pipeline
// input.txt
//    ↓
// ReadStream
//    ↓
// UpperCase Transform
//    ↓
// output.txt

// const { pipeline, Transform } = require("stream");

// const readStream = fs.createReadStream("../demo.txt");
// const writeStream = fs.createWriteStream("../tp.txt");

// const upperTransform = new Transform({
//     transform(chunk, encoding, callback) {
//         callback(null, chunk.toString().toUpperCase());
//     }
// });

// pipeline(
//     readStream,
//     upperTransform,
//     writeStream,
//     (err) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("Done");
//         }
//     }
// );
