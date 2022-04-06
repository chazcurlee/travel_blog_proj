const { Post } = require('../models')


const getPost = async (req, res) => {

    let result = await Post.find({})
    res.json(result)


}

const getPostDetail = async (req, res) => {

    let result = await Post.findById(req.params.id)
    res.json(result)

}

// const updatePostDetail = async (req, res) => {

    
//     let result = await Post.findByIdAndUpdate({_id: req.params.id}, {req.body})
//     res.json(result)


// }

const createPost = async (req, res) => {

    console.log(req.body.info)
    let inp = req.body.info
    let result = await Post.insertMany(inp)
    res.json(result)

}



module.exports ={
   
    getPost,
    getPostDetail,
    createPost


}