

const path = require('path');


console.log(path.basename("/user/docs/app.js"));
console.log(path.basename("/user/docs/app.js", ".js"))

//Environment variables ke multiple paths ko separate karne wala symbol.
// console.log(process.env.PATH.split(path.delimiter));

//File/folder ka parent directory deta hai.
console.log(path.dirname("/user/docs/app.js"))

//File ka extension deta hai.
console.log(path.extname("index.html"))
console.log(path.extname("app.js"))
console.log(path.extname("README"))

//Object se path string banata hai.

console.log(path.format({
  dir: "user/docs",
  name: "app",
  ext: ".js"
}));

//Check karta hai ki path glob pattern se match hota hai ya nahi. Ye newer Node versions me available hai.
console.log(path.matchesGlob("src/app.js", "src/*.js"))
console.log(path.matchesGlob("src/app.css", "src/*.js"))

//Check karta hai path absolute hai ya relative.
console.log(path.isAbsolute("C:\\Users\\A\\file.txt"))

//Multiple path parts ko join karta hai aur separators fix karta hai.
console.log(path.join("users", "aman", "docs", "app.js"))

//Messy path ko clean karta hai.
console.log(path.normalize("/user//docs/../app.js"))


//Path ko object me tod deta hai.
console.log(path.parse("/user/docs/app.js"))

// Linux/Mac style paths force karta hai, yani
console.log(path.posix.join("user", "docs", "app.js"))


//Ek path se dusre path tak ka relative path deta hai.
console.log(path.relative("/user/docs", "/user/images/photo.png"))

//Absolute path banata hai.
console.log(path.resolve("docs", "app.js"))

//Current OS ka path separator.
console.log(path.sep)
