// | Method             | Purpose       |
// | ------------------ | ------------- |
// | `readFileSync()`   | File read     |
// | `writeFileSync()`  | File write    |
// | `appendFileSync()` | Data add      |
// | `unlinkSync()`     | File delete   |
// | `mkdirSync()`      | Folder create |
// | `rmdirSync()`      | Folder remove |
// | `renameSync()`     | Rename file   |


const fs = require('fs');


// 1) fs.readFileSync
// const data = fs.readFileSync('../demo.txt' , 'utf-8');
// console.log(data)



//2) writeFileSync
// fs.writeFileSync('../demo.txt' , "Learninf file system operation");
// const data = fs.readFileSync('../demo.txt' , 'utf-8');
// console.log(data)




//3) appendFileSync
// fs.appendFileSync("../demo.txt" , "\nLearning file system operation")
// const data = fs.readFileSync('../demo.txt' , 'utf-8');
// console.log(data)




//4) unlinkSync
// fs.unlinkSync("../tp.txt");
// console.log("File deleted successfully")





//5) mkdirSync
//The fs.mkdirSync() method is used to create a directory Synchronously. If the directory already exists, an error is thrown unless the recursive option is set to true, which allows the creation of nested directories.

// fs.mkdirSync('SyncFileOperation' , {recursive : true});




//6) rmdirSync
// fs.rmdirSync("SyncFileOperation" , {recursive : true});




// 7) fs.renameSync
// fs.renameSync("app.js" , "syncop.js");




