const express = require("express");

const router = express.Router();

router.get("/:id" , (req,res)=>{
    const id = req.params.id
    res.json({
        success : true,
        id : id
    })
})


module.exports = router;