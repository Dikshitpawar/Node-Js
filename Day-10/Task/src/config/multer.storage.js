const multer = require('multer');
const fs = require('fs');

if(!fs.existsSync("./src/upload")){
    fs.mkdirSync("./src/upload")
}

const storage = multer.diskStorage({
    destination : (req,file,cb)=> cb(null , "./src/upload/"),
    filename : (req,file,cb)=> {
        const suffix = Math.round(Math.random() * 1000);
        cb(null , suffix + '-' + file.originalname)
    }
})

const upload = multer({storage : storage});


module.exports = upload;