
// const EventEmitter = require('events');


// const emitter = new EventEmitter();
// let balance = 0;
// emitter.on("error", (err) => {
//     console.log(err.message);
// });
// emitter.on("deposit", (amount) => {
//     balance += amount;
//     console.log(`Deposited ₹${amount}`);
//     console.log(`Current Balance: ₹${balance}`);
// });
// emitter.on("withdraw", (amount) => {
//     if (amount > balance) {
//         emitter.emit(
//             "error",
//             new Error("Insufficient Balance")
//         );
//         return;
//     }
//     balance -= amount;
//     console.log(`Withdrawn ₹${amount}`);
//     console.log(`Current Balance: ₹${balance}`);
// });
// emitter.emit("deposit", 5000);
// emitter.emit("withdraw", 2000);
// emitter.emit("withdraw", 10000);






// const emitter = new EventEmitter();
// emitter.on("error" , (err)=>{
//     console.log(err.message)
// })

// emitter.on("login" ,(name)=>{
//     if(!name){
//         emitter.emit("error" , new Error("username required"));
//         return
//     }
//     console.log("Welcome" , name)
// })

// emitter.emit("login" , "");









// const emitter = new EventEmitter();

// emitter.on("orderPlaced" , ()=>{
//     console.log("Invoice Generated For ₹5000")
// })
// emitter.on("orderPlaced" , ()=>{
//     console.log("Stock Updated For ₹5000")
// })  
// emitter.on("orderPlaced" , ()=>{
//     console.log("SMS Sent For ₹5000")
// })
// emitter.emit("orderPlaced", 5000);








// const emitter = new EventEmitter();
// emitter.on("userRegistered" , (name)=>{
//     console.log("Welcome Email Sent To" , name)
// })
// emitter.on("userRegistered" , (name)=>{
//     console.log("Reward Points Added To", name)
// })
// emitter.on("userRegistered" , (name)=>{
//     console.log("User Dikshit" , name)
// })
// emitter.emit("userRegistered", "Dikshit");









// const emitter = new EventEmitter();
// emitter.on("error" , (err)=>{
//     console.log(err.message);
// })
// emitter.on("checkAge" , (age)=>{
//     if(age<18){
//         emitter.emit("error" , new Error("Age must be 18+"));
//     }
// })
// emitter.emit("checkAge" , 15)







// const emitter = new EventEmitter();

// let oderId , amount;
// emitter.on("orderPlaced" , ({oderId , amount})=>{
//     oderId = oderId,
//     amount = amount
//     console.log("Order Received")
// });
// emitter.on("payment" , (id)=>{
//     console.log("Invoice Generated For Order", id)
// })
// emitter.on("payment" , (id)=>{
//     console.log("Stock Updated For Order" , id)
// })
// emitter.on("payment" , (id)=>{
//     console.log("Confirmation Email Sent For Order" ,id)
// })
// emitter.on("paymentSuccess" , ()=>{
//     if(amount>0){
//         emitter.on("payment" , oderId);
//     }
// }) 





// Create a simple Node.js application to learn asynchronous programming and event-driven concepts for order processing.
// requirements:

// Order Processing Using Promises
// Create the following functions:

// validateOrder(orderId)
// processPayment(orderId)
// generateInvoice(orderId)
// Each function must return a Promise.
// Use setTimeout() to simulate API/database delays.
// Process the order in the following sequence:
// Validate Order
//       ↓
// Process Payment
//       ↓
// Generate Invoice
// Use .then() and .catch().



// Add error handling and event emitters to it.