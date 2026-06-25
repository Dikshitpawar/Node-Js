import User from "../models/user.model.js";
import ApiError from "../utils/errorHandler.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new ApiError(401, "Access Token missing");
  }
  const accessToken = authHeader.slice(7);

  const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);

  const user = await User.findOne({ _id: decoded.id });

  if (!user) {
    throw new ApiError(401, "Invalid credentials");
  }

  req.user = user;
  next();
};
