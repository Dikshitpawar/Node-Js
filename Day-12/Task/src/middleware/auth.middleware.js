import jwt from "jsonwebtoken"
import User from "../models/auth.model.js";
import ApiError from "../utils/errorHandler.js";

export const auth = async (req,res,next)=>{
    const authHeaders = req.headers.authorization;
    if (!authHeaders || !authHeaders.startsWith("Bearer ")) {
    throw new ApiError(401, "Access Token missing");
    }
    const accessToken = authHeaders.slice(7)

    const decoded = jwt.verify(accessToken , process.env.ACCESS_TOKEN_SECRET)

    const user = await User.findOne({_id : decoded.id})

    if(!user){
        throw new ApiError(401 , "Invalid credentials")
    }
    req.user = user
    next()
}
