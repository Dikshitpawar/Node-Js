const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customer : {
        type : String
    },
    city : {
        type : String
    },
    amount : {
        type : Number
    },
    quantity : {
        type : Number
    }
})

const orderModel = mongoose.model("order" , orderSchema);

module.exports = orderModel