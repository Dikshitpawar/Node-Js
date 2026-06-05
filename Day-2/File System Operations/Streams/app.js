// File Stream: file ka data ek saath pura memory me load nahi hota, small-small chunks me read/write hota hai.

// 4 Types:
// Writeable: Streams that you can write data to.
// Readable: Streams that you can read data from.
// Duplex: Streams that are both readable and writeable.
// Transform: A type of Duplex stream that can modify or transform the data as it is written and read.





const fs = require("fs");

// 1) writeStream :-
// const writeStream = fs.createWriteStream("../demo.txt");
// writeStream.write("Hello bro\n");
// writeStream.write("This is Node.js stream\n");

// writeStream.end();

// writeStream.on("finish" , ()=>{
//     console.log("finish")
// })
// writeStream.on("error" , (err)=>{
//     console.log(err);
// })





// 2) fs.ReadStream :-

// const readStream = fs.createReadStream("../demo.txt" , {encoding:"utf-8" , highWaterMark:20});

// readStream.on("data" , (chunk)=>{
//     console.log(chunk)
// })





// 3) duplexStream :-

// const { Duplex } = require("stream");

// const duplexStream = new Duplex({    
    
//     write(chunk, encoding, callback) {
//         console.log("Writing:", chunk.toString());
//         callback();
//     },

//     read(size) {
//         this.push("Reading data\n");
//         this.push(null);
//     }
// }); 

// duplexStream.write("Hello");

// duplexStream.on("data", (chunk) => {
//     console.log(chunk.toString());
// });







//4) TransformStream:-

// const { Transform } = require("stream");

// const upperCaseTransform = new Transform({
    
//     transform(chunk, encoding, callback) {
        
//         const upperChunk = chunk.toString().toUpperCase();
        
//         callback(null,upperChunk);
//     }
// });

// upperCaseTransform.write("hello");

// upperCaseTransform.on("data", (chunk) => {
//     console.log(chunk.toString());
// });  




