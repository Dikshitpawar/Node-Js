import { authServices } from "../service/index.js";
import { asyncHandler } from "../utils/asyncHandler.js";




export const register = asyncHandler(async (req,res)=>{
    const {name , email , password } = req.body
    const user = await authServices.register({name , email, password})

    res.status(201).json({
        success : true,
        message : "User registered successfully.!"
    })
})

export const login = asyncHandler(async (req,res)=>{
    const {email , password} = req.body
    const {user,accessToken, accessTokenExpiresTime, refreshToken, refreshTokenExpiresTime} = await authServices.login({email,password})

    res.cookie("refreshToken" , refreshToken)

    res.status(200).json({
        success : true,
        message : "User logged in successfully.!",
        Data : {
            accessToken : {
                token : accessToken,
                expiresAt : accessTokenExpiresTime
            },
            refreshToken : {
                token : refreshToken,
                expiresAt : refreshTokenExpiresTime
            },
            user : {
                user
            }
        }
    })
})

export const refreshAccessToken = asyncHandler(async (req,res)=>{
    const refreshToken = req.cookies.refreshToken
    const accessToken = await authServices.refreshApiService(refreshToken)

    res.status(201).json({
        success : true,
        message : "Access token generated successfully.!",
        accessToken : accessToken
    })
})
