//upload single file


const express = require("express");
const multer = require("multer");
const fs = require("fs");
const app = express();

if (!fs.existsSync("upload")) {
  fs.mkdirSync("upload");
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "upload/"),
  filename: (req, file, cb) => {
    const suffix = Math.round(Math.random() * 1000);
    cb(null, suffix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  res.json({
    message: "File uploaded",
    file: file,
  });
});

app.listen(3000, () => {
  console.log("server is running..");
});
