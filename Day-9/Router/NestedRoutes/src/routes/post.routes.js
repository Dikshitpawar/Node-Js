const express = require('express');

const router = express.Router({mergeParams : true});

router.get('/post' , (req,res)=>{
    const id = req.params.id;

    res.json({
        success : true,
        id : id
    })
})

module.exports = router