

// 1) Readable Stream

const { error } = require('console');
const fs = require('fs');

// const stream = fs.createReadStream('../demo.txt' , "utf-8");

// stream.on("data" , (chunk)=>{
//     console.log(chunk.toString());
// })
// stream.on("end" , ()=>{
//     console.log("File Read Done")
// })
// stream.on("error" , (err)=>{
//     console.log(err);
// })






//2) Writable stream

// const stream = fs.createWriteStream("../demo.txt" , "utf-8");
// stream.write("Hello How are you");
// stream.end();
// stream.on("finish" , ()=>{
//     console.log("File Write Done")
// })
// stream.on("error" , (err)=>{
//     console.log(err);
// })






//3) Duplex stream 

// const {Duplex} = require('stream')

// const duplex = new Duplex({
//     write(chunk , encoding , callback){
//         console.log(chunk.toString());
//         callback()
//     },
//     read(){
//         this.push("Helllo");
//         this.push(null);
//     }
// })

// duplex.write("node js");
// duplex.on("data" , (chunk)=>{
//     console.log(chunk.toString())
// })









//4) Transfrom stream

// const {Transform} = require('stream');

// const upperCaseTransform = new Transform({
//     transform(chunk,encoding,callback){
//         let upperChunk = chunk.toString().toUpperCase();
//         callback(null,upperChunk)
//     }
// })

// upperCaseTransform.write("helllo");
// upperCaseTransform.on("data" , (chunk)=>{
//     console.log(chunk.toString())
// })









//5) pipe method

// const readStream = fs.createReadStream('../demo.txt')
// const writeStream = fs.createWriteStream('../tp.txt');

// readStream.pipe(writeStream)
// console.log("Done")







//stream events : 

// data :- ReadStream
// end :- Stream end
// error :- handle errors
//finish :- WriteStream 
//close :- Stream completely ends



//BackPressure




//Stream Performance





