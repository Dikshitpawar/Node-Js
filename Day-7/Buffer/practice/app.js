// Q1. Create a Buffer

// Create a buffer from the string "Hello Node.js" and print:
// The buffer
// Its length
// The original string using toString()

// const buffer = Buffer.from("Hello Node.js");
// console.log(buffer);
// console.log(buffer.length);
// console.log(buffer.toString());




// Q2. Buffer from Array

// Create a buffer using:
// [72, 101, 108, 108, 111]
// Print the decoded string.
// Expected output:
// Hello

// const buffer = Buffer.from([72,101,108,108,111]);
// console.log(buffer);
// console.log(buffer.toString());






// Q3. Allocate Memory

// Create a buffer of size 10 using Buffer.alloc().
// Print:
// The buffer
// Its length

// const buffer = Buffer.alloc(10);
// console.log(buffer)
// console.log(buffer.length)







// Q4. Check Buffer

// Write a function:
// function isMyBuffer(data) {
//   // your code
// }
// that returns true if the argument is a Buffer and false otherwise.

// Example:
// isMyBuffer(Buffer.from("Hello")) // true
// isMyBuffer("Hello") // false

// function isMyBuffer(data) {
//   return Buffer.isBuffer(data);
// }

// console.log(isMyBuffer(Buffer.from("Hello")));
// console.log(isMyBuffer("Hello"))









// Q5. String to Hex

// Convert:
// "OpenAI"
// into a Buffer and print its hexadecimal representation.

// Example:
// 4f70656e4149

// const buffe = Buffer.from("OpenAI");
// console.log(buffe.toString("hex"));








// Q6. Hex to String

// Given:
// const hex = "48656c6c6f";
// Convert it back to:
// Hello
// using Buffers.

// const buffer = Buffer.from("48656c6c6f" , "hex");
// console.log(buffer.toString())








// Q7. Concatenate Buffers

// Create:
// const buf1 = Buffer.from("Hello ");
// const buf2 = Buffer.from("World");
// Combine them into a single buffer and print:
// Hello World

// const buf1 = Buffer.from("Hello ");
// const buf2 = Buffer.from("World");

// const result = Buffer.concat([buf1,buf2]);
// console.log(result.toString())







// Q8. Copy Buffer

// Create a buffer:
// const source = Buffer.from("NodeJS");
// // Copy it into another buffer and print the copied value.

// const source = Buffer.from("NodeJS");
// const dest = Buffer.alloc(source.length);
// source.copy(dest);
// console.log(dest.toString())




// Q9. Base64 Encode

// Convert:
// "Backend Developer"
// to Base64.

// const buffer = Buffer.from("Backend Developer");
// console.log(buffer.toString("base64"))










// Q10. Base64 Decode

// Given:
// "SGVsbG8gV29ybGQ="
// Decode it back to text.

// const buffer = Buffer.from("SGVsbG8gV29ybGQ=" , "base64")
// console.log(buffer.toString())












// Q11. Access Individual Bytes

// Given:

// const buf = Buffer.from("ABC");
// Print:
// 65
// 66
// 67
// using indexing.

// const buffer = Buffer.from("ABC");
// console.log(buffer[0])
// console.log(buffer[1])
// console.log(buffer[2])







// Q12. Modify Buffer

// Create:
// const buf = Buffer.from("Hello");
// Change it to:
// Jello
// without creating a new buffer.

// const buf = Buffer.from("Hello");
// buf[0] = 74;
// console.log(buf.toString())








// Q13. Read File with Stream

// Write code to:
// Read a file using fs.createReadStream()
// Print the size of every chunk received

// Example output:
// Chunk size: 1024 bytes
// Chunk size: 1024 bytes
// Chunk size: 512 bytes

// const fs = require('fs');

// const readStream = fs.createReadStream("../../demo.txt");

// readStream.on("data" , (chunk)=>{
//     console.log("Chunk size:" , chunk.length , "bytes");
// })








// Q14. Count Total Bytes

// Using streams, calculate the total number of bytes in a file.
// Example output:
// Total bytes: 10567

// const fs = require('fs');

// const readStream = fs.createReadStream("../../demo.txt");
// let total = 0;
// readStream.on("data" ,(chunk)=>{
//     total += chunk.length
// })
// readStream.on("end" , ()=>{
//     console.log("Total bytes:" , total)
// })







// Q15. Collect Chunks

// Read a file using streams.
// Store all received chunks in an array and finally combine them using:

// Buffer.concat()
// Print the file content.

// const fs = require('fs');

// const readStream = fs.createReadStream("../../demo.txt");

// let chunks = [];

// readStream.on("data" , (chunk)=>{
//     chunks.push(chunk);
// })
// readStream.on("end" , ()=>{
//     console.log(Buffer.concat(chunks).toString())
// })






// Q16. File Copy Utility

// Create a program that:
// Reads a large file using a stream.
// Writes it to another file using a writable stream.
// Does not use fs.readFile().

// This tests your understanding of:
// Buffers
// Streams
// Memory efficiency


// const fs = require('fs')
// const readStream = fs.createReadStream("../../demo.txt", "utf-8");
// const writeStream = fs.createWriteStream("../../tp.txt" , "utf-8");

// readStream.pipe(writeStream);










// Q17. Build a Simple Buffer Logger

// Create a function:
// function analyzeBuffer(text) {
//    // code
// }

// For input:
// analyzeBuffer("Hello")

// Output:
// Original String: Hello
// Buffer Length: 5
// Hex: 48656c6c6f
// Base64: SGVsbG8=

// function analyzeBuffer(text) {
//    let buffer = Buffer.from(text);
//    console.log("Original String:" ,buffer.toString());
//    console.log("Buffer Length:" ,buffer.length);
//    console.log("Hex:",buffer.toString("hex"))
//    console.log("Base64" ,buffer.toString("base64"))
// }
// analyzeBuffer("Hello")







// Q18. Mini Upload Simulator

// Simulate receiving file chunks:
// const chunks = [
//   Buffer.from("Hello "),
//   Buffer.from("from "),
//   Buffer.from("Node.js")
// ];

// Merge them into a single buffer and print:
// Hello from Node.js

// const chunks = [
//   Buffer.from("Hello "),
//   Buffer.from("from "),
//   Buffer.from("Node.js")
// ];

// console.log(Buffer.concat(chunks).toString())