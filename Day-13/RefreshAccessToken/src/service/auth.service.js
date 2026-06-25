import User from "../models/user.model.js";
import RefreshToken from "../models/refreshToken.model.js";
import bcrypt from "bcryptjs";
import ApiError from "../utils/errorHandler.js";
import jwt from "jsonwebtoken";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils/generateTokens.js";

export const register = async (data) => {
  const { name, email, password } = data;
  const hasPassword = await bcrypt.hash(password, 10);
  return await User.create({ name, email, password: hasPassword });
};

export const login = async (data) => {
  const { email, password } = data;
  const user = await User.findOne({ email });
  if (!user) {
    throw new ApiError(401, "Invalid credentials");
  }

  const passwordCheck = await bcrypt.compare(password, user.password);

  if (!passwordCheck) {
    throw new ApiError(401, "Invalid credentials");
  }
  const accessToken = generateAccessToken(user._id);
  const refreshToken = generateRefreshToken(user._id);

  await RefreshToken.create({
    user: user._id,
    token: refreshToken,
    expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  });

  return { user, accessToken, refreshToken };
};

export const RefreshApiService = async (refreshToken) => {
  if (!refreshToken) {
    throw new ApiError(401, "Refresh Token missing");
  }

  const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

  const storedToken = await RefreshToken.findOne({
    user: decoded.id,
  });

  if (!storedToken) {
    throw new ApiError(401, "Invalid refresh token");
  }

  if (storedToken.expiresAt < Date.now()) {
    throw new ApiError(401, "Refresh token is expired");
  }

  const accessToken = generateAccessToken(decoded.id);
  return accessToken;
};
