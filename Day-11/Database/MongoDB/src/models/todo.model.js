const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    dueDate : {
        type : Date,
        required : true
    }
}, {timestamps:true});


const todoModel = mongoose.model("todo" , todoSchema);


module.exports = todoModel