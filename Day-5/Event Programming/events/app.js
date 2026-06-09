// 1) emitter.on :- Listener
// 2) emitter.emit :- event trigger


//Example: 

const EventEmitter = require('events');

// const emitter = new EventEmitter();
// emitter.on("greet" , ()=>{
//     console.log("Hello");
// })

// emitter.emit("greet");




//Multiple listener

// const emitter = new EventEmitter();
// emitter.on("login" , ()=>{
//     console.log("send mail")
// })
// emitter.on("login" , ()=>{
//     console.log("Database Update")
// })
// emitter.on("login" , ()=>{
//     console.log("Create log")
// })

// emitter.emit("login");





//Passing Data :

// const emitter = new EventEmitter();
// emitter.on("greet" , (name , age)=>{
//     console.log(name)
//     console.log(age)
// })
// emitter.emit("greet","Dikshit" , 20);





//Removing Event listener

// const emitter = new EventEmitter();
// function loginHandler(){
//     console.log("Success");
// }
// emitter.on("login" , loginHandler);
// // emitter.off("login" , loginHandler);

// //another method
// emitter.removeListener("login" ,loginHandler);

// emitter.emit("login");





// once vs on

// const emitter = new EventEmitter();
// // emitter.on("login" , ()=>{
// //     console.log("Logged in")
// // })

// emitter.once("login" , ()=>{
//     console.log("Logged in");
// })

// emitter.emit("login")
// emitter.emit("login")
// emitter.emit("login")




//error event

// const emitter = new EventEmitter();
// emitter.on("error" , (err)=>{
//     console.log(err.message);
// })

// emitter.emit("error" , new Error("Server Error.!"));





