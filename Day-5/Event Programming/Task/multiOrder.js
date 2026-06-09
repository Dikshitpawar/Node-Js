// Now add the

// Process Multiple Orders and use async await also
// Create an array and Process all orders simultaneously using Promise.all().
// Display a success message when all orders are completed.

const EventEmitter = require('events');
const emitter = new EventEmitter();


emitter.on("start" , ()=>{
    console.log("Order processing start.......")
})
emitter.on("end" ,()=>{
    console.log("Order processing complete")
})
emitter.on("validOrder" , (orderId)=>{
    console.log("Order validate successfully for order" , orderId)
})
emitter.on("payment" , (orderId)=>{
    console.log("Payment procced successfully for order" , orderId)
})
emitter.on("generateInvoice" , (orderId)=>{
    console.log("Invoice Generated for order" , orderId)
})

emitter.on("error" , (err)=>{
    console.log(err.message)
})


function validateOrder(orderId){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if(!orderId){
            rej(`Order validatation Failed`)
        }
        else{
            emitter.emit("validOrder" , orderId);
            res()
        }
        },3000)
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
        },2000)
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
        },3000)
    })
}
async function processOrder(orderId){
    try {
        await validateOrder(orderId)
        await processPayment(orderId)
        await generateInvoice(orderId)
        
    } catch (err) {
        
        emitter.emit("error" , new Error(err));
    }
}


async function processAllOrders(){
    emitter.emit("start")
    const result = await Promise.all([processOrder(101) , processOrder(102), processOrder(103), processOrder(104)]);
    emitter.emit("end")
    console.log(result)
}

processAllOrders()

