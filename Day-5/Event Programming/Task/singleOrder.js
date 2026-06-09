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
//    ↓
// Process Payment
//    ↓
// Generate Invoice
// Use .then() and .catch().


// Add error handling and event emitters to it.



const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on("validOrder" , (orderId)=>{
    console.log("Oder validate successfully for order" , orderId)
})
emitter.on("payment" , (orderId)=>{
    console.log("Payment procced successfully for order" , orderId)
})
emitter.on("generateInvoice" , (orderId)=>{
    console.log("Invoice Generated for order" , orderId)
})

emitter.on("error" , (err)=>{
    console.log(err)
})


function validateOrder(orderId){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if(!orderId){
            rej("Order validate Failed")
        }
        else{
            emitter.emit("validOrder" , orderId);
            res()
        }
        },1000)
    })
}

function processPayment(orderId){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if(!orderId){
            rej("Process Payment Failed")
        }
        else{
            emitter.emit("payment" , orderId);
            res()
        }
        },1000)
    })
}

function generateInvoice(orderId){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if(!orderId){
            rej("Invoice generation failed")
        }
        else{
            emitter.emit("generateInvoice", orderId);
            res()
        }
        },1000)
    })
}

let order = 101;
validateOrder(order)
.then(()=>{
    return processPayment(order)
})
.then(()=>{
    return generateInvoice()
})
.catch((err)=>{
    emitter.emit("error" , new Error(err));
})



