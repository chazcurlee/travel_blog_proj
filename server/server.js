const express = require('express');
const cors = require('cors')
const PORT = process.env.PORT || 3001;
const app = express();
const db = require('./db')



app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false}))



const commentsController = require('./controllers/commentsController')
const postsController = require('./controllers/postsController')
const { Post, Comment } = require('./models')


app.get('/posts', postsController.getPost)
app.get('/posts/:id', postsController.getPostDetail)
app.get('/comments', commentsController.getComment)
app.post('/posts', postsController.createPost)



app.listen(PORT, () => console.log(`Listening on port ${PORT}` ))