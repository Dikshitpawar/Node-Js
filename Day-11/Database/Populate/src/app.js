const express= require("express");
const postRoutes = require("./routes/post.route");
const authRoutes = require("./routes/auth.routes")

const app = express();
app.use(express.json())
app.use("/api/post" , postRoutes);
app.use("/api/auth" , authRoutes);

module.exports = app;