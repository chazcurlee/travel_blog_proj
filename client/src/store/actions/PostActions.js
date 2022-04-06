import { GetPosts, GetPostDetails } from '../../services/PostService'
import { GET_POSTS, GET_POST_DETAILS } from '../types'
  
export const LoadPosts = () => {
  
    return async (dispatch) => {
      try {
        const posts = await GetPosts()
        
        dispatch({
          type: GET_POSTS,
          payload: posts
        })
      } catch (error) {
        throw error
      }
    }
}
  
export const LoadPostDetails = (id) => {
  
    return async (dispatch) => {
      try {
        const posts = await GetPostDetails(id)
  
        dispatch({
          type: GET_POST_DETAILS,
          payload: posts
        })
      } catch (error) {
        throw error
      }
    }
}