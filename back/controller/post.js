const postModel = require("../models/posts");
const UserModel = require("../models/User");
const { post } = require("../routes/auth");


exports.createPost = async (req, res, next) => {
    const newPost = new postModel(req.body)
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch(error) {
        res.status(401).json(error)

    }
}



exports.updatePost = async (req, res, next) => {
    try{
        const post = await postModel.findById(req.params.id)
        if (post.username === req.body.username) {
          try{
            const updatedPost = await postModel.findByIdAndUpdate(
                req.params.id, 
                {
                $set: req.body
                },
                {new: true })
            res.status(200).json(updatedPost)    
        } catch(err) {
            res.status(401).json(err)
        }   
 
        } else {
            res.status(401).json("Not Allowed!!!")
        }
    
    } catch(error) {
        res.status(401).json(error)

    }
    
}


// Delete Post
exports.deletePost = async (req, res, next) => {
    try{
        const post = await postModel.findById(req.params.id)
        if (post.username === req.body.username) {
            try{
                await postModel.findByIdAndDelete(req.params.id)
                res.status(200).json("Your Post has been deleted Successfully")
            } catch(err) {
                res.status(401).json(err)
            } 
        } else {
            res.status(401).json("Not allowed!!!!")
        }

    } catch(err) {
        res.status(401).json(err)
    }
}



exports.getPost = async (req, res, next) => {
    try{
        const post = await UserModel.findById(req.params.id)
        if (post.username === req.body.username) {
            try{
                const userPost = await UserModel.findById(req.params.id)
                res.status(200).json(userPost)
            } catch(err) {
                res.status(401).json(err)
            }
        } else {
            res.status(401).json("Not allowed to get a Post")
        }

    } catch(err) {
        res.status(401).json(err)
    }
}