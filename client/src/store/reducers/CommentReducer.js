const { GET_COMMENTS, GET_COMMENT_DETAILS } = require('../types')

const iState = {
    comments: [],
    
}

const CommentReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return { ...state, comments: action.payload }
    case GET_COMMENT_DETAILS:
        return {...state, comments: action.payload}
    default:
      return { ...state }
  }
}

export default CommentReducer