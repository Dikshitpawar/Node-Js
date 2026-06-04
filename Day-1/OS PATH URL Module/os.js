

const os = require('os');

// // platform method returns the os platform
// console.log(os.platform());

// //arch :- return the CPU architecture
// console.log(os.arch())

// //cpus :- give the info about CPU cores
// console.log(os.cpus().length)

// //totalmem , freemam :- return the memory in byte
// console.log((os.totalmem() /1024/1024/1024).toFixed(2))
// console.log((os.freemem() /1024/1024/1024).toFixed(2))

// //hostname :- gives the computer name
// console.log(os.hostname());

// //homedir :- Gives user home directory
// console.log(os.homedir())

// //tmpdir :- Gives the temporary files folder
// console.log(os.tmpdir());

// //type :- returns the os name
// console.log(os.type())

//release :- os system release version
// console.log(os.release())

//uptime :- kitne time se system on he woh return krta he in second
// console.log(os.uptime())

//userInfo :- gives the user info
// console.log(os.userInfo())

//networkInterfaces :- Shows Wi-fi Ip address
// console.log(os.networkInterfaces())

//EOL :- The operating system-specific end-of-line marker.
// console.log(JSON.stringify(os.EOL))  

//version :- detailed version 
// console.log(os.version())

//machine :-machine architecture detail
// console.log(os.machine())

console.log(os.loadavg())
