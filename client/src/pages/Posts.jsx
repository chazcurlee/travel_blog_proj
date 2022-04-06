import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { LoadPosts } from '../store/actions/PostActions'


const mapStateToProps = ({ postState }) => {
  return { postState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(LoadPosts())
  }
}



const Posts = (props) => {
  
    const navigate = useNavigate()
    

    const handleClick = (id) => {

        navigate(`/posts/${id}`)
        props.fetchPosts()


    }

  useEffect(() => {
        props.fetchPosts()
  },[])
  console.log(props.postState.posts)
  return (

    <div>
    <ul>
      {props.postState.posts.map((post) => (
          <div onClick={() => handleClick(post._id)}>
              <img src={`${post.img}`} />
              <li key={post._id}>{post.country_name}</li><br />
              <p>{post.content[0]}</p><br />
              <p>Likes: {post.likes}</p>
          </div>
          
        ))}
    </ul>
    </div>
   
  )

}
export default connect(mapStateToProps, mapDispatchToProps)(Posts)