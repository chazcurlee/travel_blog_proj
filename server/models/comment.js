const {Schema} = require('mongoose')

const Comment = new Schema(

    {

        input: {type: String, required: true}

        

    }, 
    {timestamps: true}

)

module.exports = Comment