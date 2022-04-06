const { model } = require('mongoose')
const PostSchema = require('./post')
const CommentSchema = require('./comment')


const Comment = model('comments', CommentSchema)
const Post = model('posts', PostSchema)

module.exports = {
    Comment,
    Post
}