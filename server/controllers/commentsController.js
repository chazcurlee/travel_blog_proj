const { Comment, Post } = require('../models')

const getComment = async (req, res) => {


    let result = await Comment.findById(req.body)
    res.json(result)


}




module.exports ={
   
    getComment


}