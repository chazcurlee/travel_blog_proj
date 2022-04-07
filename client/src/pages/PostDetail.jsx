import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { LoadPostDetails } from '../store/actions/PostActions'
import { GetCommentDetails } from '../services/CommentService'




const mapStateToProps = ({ postState }) => {
  return { postState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPost: (id) => dispatch(LoadPostDetails(id)),
    fetchComment: (id) => dispatch(GetCommentDetails(id))
  }
}



const PostDetail = (props) => {

    const { id } = useParams()
    const postInfo = props.postState.posts
    
  

  useEffect(() => {
        props.fetchPost(id)    
       
  },[])

  console.log(postInfo)

  return (

    <div>
    
      
          <div >
              <img src={`${postInfo.img}`} />
              <li key={postInfo._id}>{postInfo.country_name}</li><br />
              <p>{postInfo.content}</p><br />
              <p>Likes: {postInfo.likes}</p>
              <p>{postInfo.comments}</p>
              <form>
                <textarea id="comment-field" placeholder='comment' />
              </form>
          </div>
          
        
    
    </div>
   
  )

}
export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)