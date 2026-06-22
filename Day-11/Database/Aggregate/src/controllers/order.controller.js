const orderModel = require('../models/order.model');


async function addOrder(req,res) {
    const {customer , city, amount, quantity} = req.body

    const order = await orderModel.create({customer,city,amount,quantity});

    res.status(201).json({
        success: true,
        message :"Order Created"
    })
}


async function getOrder(req,res){

    // const result = await orderModel.aggregate([
    //     {
    //         $match : {city : "Delhi"}
    //     }
    // ])


    // const result = await orderModel.aggregate([
    //     {
    //         $project : {
    //             customer : 1,
    //             city : 1,
    //             _id : 0
    //         }
    //     }
    // ])


    // const result = await orderModel.aggregate([
    //     {
    //         $group : {
    //             _id : "$customer"
    //         }
    //     }
    // ])


    // const result = await orderModel.aggregate([
    //     {
    //         $sort : {
    //             amount : -1
    //         }
    //     }
    // ])



    // const result = await orderModel.aggregate([
    //     {
    //         $addFields : {
    //             Country : "India"
    //         }
    //     }
    // ])



    res.status(200).json({
        success : true,
        Data : result
    })
}





module.exports = {addOrder, getOrder}