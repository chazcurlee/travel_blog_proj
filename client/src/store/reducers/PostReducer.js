const { GET_POSTS, GET_POST_DETAILS, UPLOAD_POST } = require('../types')

const iState = {
    posts: []
    
}

const PostReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts: action.payload }
    case GET_POST_DETAILS:
        return {...state, posts: action.payload}
    case UPLOAD_POST:
      console.log(state.posts)
      return {...state, posts: action.payload}
    default:
      return { ...state }
  }
}

export default PostReducer