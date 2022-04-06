const { Post } = require('../models')


const getPost = async (req, res) => {

    let result = await Post.find({})
    res.json(result)


}

const getPostDetail = async (req, res) => {

    let result = await Post.findById(req.params.id)
    res.json(result)

}

const updatePostDetail = async (req, res) => {

    let result = await Post.findByIdAndUpdate(req.params.id)
    res.json(result)


}



module.exports ={
   
    getPost,
    getPostDetail


}