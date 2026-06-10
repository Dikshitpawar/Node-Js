

const fs = require('fs');
const {Transform, pipeline} = require('stream')

const readStream = fs.createReadStream('../input.txt' , 'utf-8');
const writeStream = fs.createWriteStream('../output.txt' , "utf-8");

const convertTransform = new Transform({
    transform(chunk,encoding,callback){
        let data = chunk.toString().split("\n").map(elem => "Processed:" + elem.toUpperCase()).join("\n")
        callback(null , data);
    }
})

readStream.on("open" , ()=>{
    console.log("Read file open");
})
readStream.on("data" , (chunk)=>{
    console.log("Data ====>\n", chunk);
})
readStream.on("end" , ()=>{
    console.log("Reading ended")
})
readStream.on("error" , (err)=>{
    console.log("Error ===> " , err);
})
readStream.on("close" , ()=>{
    console.log("Read stream closed");
})


writeStream.on("finish" , ()=>{
    console.log("Writing completed");
})
writeStream.on("error" , (err)=>{
    console.log("Error ===> " , err);
})
writeStream.on("close" , ()=>{
    console.log("Write stream closed");
})

// readStream.pipe(convertTransform).pipe(writeStream);




pipeline(readStream,convertTransform,writeStream , (err)=>{
    if(err){
        console.log("Error: " , err);
    }
    else{
        console.log("file transfered completed")

        fs.createReadStream("../output.txt" , "utf-8").on("data" , (chunk)=>{
            console.log("Output Data ===>\n" , chunk)
        })
    }
})























// let str =`Hello
// kese ho
// mast hu`
// console.log(str);

// let res = str.split("\n").map(elem => elem).join("\n").toUpperCase()
// console.log(res)