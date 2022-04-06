import { GetPosts, GetPostDetails, UploadPost } from '../../services/PostService'
import { GET_POSTS, GET_POST_DETAILS, UPLOAD_POST } from '../types'
  
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

export const UploadNewPost = (newPost) => {

  return async (dispatch) => {
    try {
      console.log(newPost)
      const posts = await UploadPost(newPost)

      dispatch({
        type: UPLOAD_POST,
        payload: posts
      })
    } catch (error) {
      throw error
    }


  }




}