const authModel = require("../models/user.model");

async function userRegister(req,res){
    const {name  , email} = req.body
    const user = authModel.create({name , email});
    res.status(201).json({
        success:  true,
        message : "User register successfully.!"
    })
}

module.exports = userRegister