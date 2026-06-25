const User = require('../models/auth.model');
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")

async function register(req,res){
    
    const {email , password} = req.body
    const hashedPassword = await bcrypt.hash(password , 10);
    const user = await User.create({email, password : hashedPassword});
    res.status(201).json({
        success : true,
        message : "user registered successfully.!"
    })
}

async function login(req,res){
    const {email,password} = req.body
    const user = await User.findOne({email})

    if(!user){
        return res.status(401).json({
            success: false,
            message : "Authentication failed"
        })
    }

    const passwordMatch = await bcrypt.compare(password , user.password);

    if(!passwordMatch){
        return res.status(401).json({
            success: false,
            message : "Authentication failed"
        })       
    }

    const token = jwt.sign({id:user._id} , process.env.JWT_SECRET , {expiresIn : "1h"})
    res.status(200).json({
        success : true,
        message : "User login successfully.!",
        token : token
    })
}

module.exports = {register,login}