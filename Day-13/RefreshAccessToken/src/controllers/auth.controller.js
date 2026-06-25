import { asyncHandler } from "../utils/asyncHandler.js";
import ApiError from "../utils/errorHandler.js";
import authService from "../service/idnex.js";
import { refreshTokenCookieOptions } from "../utils/cookieOption.js";

export const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const user = await authService.register({ name, email, password });

  res.status(201).json({
    success: true,
    message: "User Registered Successfully.!",
  });
});

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const { user, accessToken, refreshToken } = await authService.login({
    email,
    password,
  });

  res.cookie("refreshToken", refreshToken, refreshTokenCookieOptions);
  res.status(200).json({
    success: true,
    message: "User logged in successfully.!",
    accessToken,
    refreshToken,
    user: user,
  });
});

export const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({
    success: true,
    message: "User fetched successfully.!",
    user: req.user,
  });
});

export const refreshAccesstoken = asyncHandler(async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  const accessToken = await authService.RefreshApiService(refreshToken);

  res.status(201).json({
    suceess: true,
    message: "Access token generated suucessfully.!",
    accessToken: accessToken,
  });
});
