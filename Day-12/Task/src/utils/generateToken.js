import jwt from "jsonwebtoken"

export const generateAccessToken = (userId)=>{
    const accessToken = jwt.sign({id:userId} , process.env.ACCESS_TOKEN_SECRET , {expiresIn:'15m'})
    const accessTokenExpiresTime = "15m"

    return {accessToken,accessTokenExpiresTime}

} 

export const generateRefreshToken = (userId)=>{
    const refreshToken = jwt.sign({id:userId} , process.env.REFRESH_TOKEN_SECRET , {expiresIn:"7d"})
    const refreshTokenExpiresTime = "7d"
    return {refreshToken , refreshTokenExpiresTime}
}

