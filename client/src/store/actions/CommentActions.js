import { GetComments, GetCommentDetails } from '../../services/CommentService'
import { GET_COMMENTS, GET_COMMENT_DETAILS } from '../types'
  
export const LoadComments = () => {
  
    return async (dispatch) => {
      try {
        const comments = await GetComments()
        
        dispatch({
          type: GET_COMMENTS,
          payload: comments
        })
      } catch (error) {
        throw error
      }
    }
}
  
export const LoadCommentDetails = (id) => {
  
    return async (dispatch) => {
      try {
        const comments = await GetCommentDetails(id)
  
        dispatch({
          type: GET_COMMENT_DETAILS,
          payload: comments
        })
      } catch (error) {
        throw error
      }
    }
}