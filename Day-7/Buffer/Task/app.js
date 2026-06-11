// File Encoder & Analyzer Using Buffers:

// Objective: Build a Node.js application that reads a text file using Buffers, analyzes its content, and generates an encoded output file.

// Requirements

// Create a file named:
// input.txtwith at least 50 lines of text.

// Read File Using Streams and Buffers
// For each chunk:
// Print chunk size in bytes.
// Keep track of total bytes read.


// Buffer Analysis
// For the complete file content:
// Calculate:
// Total characters
// Total words
// Total lines
// Total bytes

// Store the content using a Buffer.

// Encoding
// Convert the file content into:
// Base64
// Hex
// utf -8

// Generate an output file displaying the above in one output file.




const fs = require('fs');

const readStream = fs.createReadStream("../input.txt" , {highWaterMark:1000});
const writeStream = fs.createWriteStream("../output.txt");


let chunks = [];
let chunksLength = []
let totalBytesRead = 0;
readStream.on("open" , ()=>{
    console.log("Reading Started");
})
readStream.on("data" , (chunk)=>{
    chunksLength.push(chunk.length)
    totalBytesRead += chunk.length;
    chunks.push(chunk);
})

readStream.on("end" , ()=>{
    console.log("Reading ended");


    let buffer = Buffer.concat(chunks);
    let totalCharacters = buffer.toString().split("").length;
    let totalWords = buffer.toString().split(" ").length;
    let totalLines = buffer.toString().split("\n").length
    let totalBytes = buffer.length
    
    let encode_UTF8 = buffer.toString("utf-8")
    let encode_BASE64 = buffer.toString("base64")
    let encode_HEX = buffer.toString("hex")
    
    const result = chunksLength.map((elem,idx) => "Chunk " + Number(idx+1) + " size " + elem).join("\n")
   


let data = `
BUFFER ANALYSIS OUTPUT

Chunk size:
${result}

Total ReadBytes = ${totalBytesRead}

Total Characters = ${totalCharacters}

Total Words = ${totalWords}

Total Lines = ${totalLines}

Total bytes = ${totalBytes}

ENCODING OUTPUT

BASE64: 

${encode_BASE64}

UTF8:

${encode_UTF8}

HEX:

${encode_HEX}
    `
    
    writeStream.write(data);
    writeStream.end();
    writeStream.on("finish" , ()=>{
        console.log("Writing ended")
    })
})

readStream.on("close" , ()=>{
    console.log("Read stream closed")
})
writeStream.on("close" ,()=>{
    console.log("Write stream closed")
})

