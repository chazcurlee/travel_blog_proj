const {Schema} = require('mongoose')

const Post = new Schema({

    country_name: {type: String, required: true},
    content: [{type: String, required: true}],
    img: {type: String, required: true},
    likes: {type: Number, required: true},
    comments: [{type: Schema.Types.ObjectId, ref: 'comments', required: false}]

    }, 
    {timestamps: true}

)

module.exports = Post