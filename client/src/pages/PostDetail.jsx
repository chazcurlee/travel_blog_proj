import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { LoadPostDetails } from '../store/actions/PostActions'




const mapStateToProps = ({ postState }) => {
  return { postState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPost: (id) => dispatch(LoadPostDetails(id))
  }
}



const PostDetail = (props) => {

    const { id } = useParams()
    const postInfo = props.postState.posts
  

  useEffect(() => {
        props.fetchPost(id)
  },[])

  console.log(props.postState.posts)

  return (

    <div>
    
      
          <div >
              <img src={`${postInfo.img}`} />
              <li key={postInfo._id}>{postInfo.country_name}</li><br />
              <p>{postInfo.content}</p><br />
              <p>Likes: {postInfo.likes}</p>
          </div>
          
        
    
    </div>
   
  )

}
export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)