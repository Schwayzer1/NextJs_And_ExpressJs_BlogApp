const Post = require("../models/posts")

 const getPosts = async (req,res)=>{
    try{
        const posts = await Post.find()
        res.status(200).json(posts)
    } catch (error) {
        res.status(404).json({
            message:error.message
        })
    }
}

const createPosts = async (req,res)=>{
    const newPost = new Post(req.body)
    try{
      await  newPost.save()
      res.status(200).json(newPost)
    } catch (error) {
        res.status(409).json({
            message:error.message
        })
    }
}





module.exports = { getPosts, createPosts };
