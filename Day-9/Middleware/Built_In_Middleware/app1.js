//express.urlencoded({extended:true})



const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.post("/register", (req, res) => {
  console.log(req.body);

  res.send("Form submitted");
});

app.listen(3000, () => {
  console.log("Server is running..");
});
