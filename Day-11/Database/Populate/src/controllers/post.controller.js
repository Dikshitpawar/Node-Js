const postModel = require("../models/post.model");

async function createPost(req,res){
    const {title , content , author} = req.body;
    const post = await postModel.create({title,content,author});

    res.status(201).json({
        success : true,
        message : "Post created successsfully.!"
    })
}

async function getPost(req,res){
    const allPost = await postModel.find().populate("author")
    
    res.status(200).json({
        success:true,
        message:"All post fetched",
        Data : allPost
    })
}

module.exports = {createPost,getPost}

