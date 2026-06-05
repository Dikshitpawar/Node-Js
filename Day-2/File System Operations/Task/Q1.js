// 1. Create a file system-info.js.
// Output:
// Hello User
// Platform: darwin
// Architecture: arm64
// Node Version: v22.x.x
// Current Directory: /Users/harsh/project
// File Name: system-info.js
// Environment: development
// Rules
// ● Use:
// ○ process
// ○ os
// ○ path
// ● Read username from command line argument
// ● Read environment from .env or process.env
// Bonus
// If no username is passed: Please provide your name
    


const os = require('os');
const path = require('path');

const args = process.argv;
if(args[2] === undefined){
    console.log("Please provide your name")
}else{

    let platform = os.platform();
    let arch = os.arch();  
    let version = process.version
    let curDir = process.cwd() 
    let filename = path.basename(__filename); 
    let environment = process.env.NODE_ENV || "development"

    console.log("Hello", args[2])
    console.log("Platform:", platform)
    console.log("Architecture:" , arch);
    console.log("Node Version:" , version);
    console.log("Current Directory", curDir);
    console.log("File Name:", filename);
    console.log("Environment:", environment);
}

















