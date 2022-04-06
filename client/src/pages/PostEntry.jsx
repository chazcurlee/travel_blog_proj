import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { UploadNewPost } from '../store/actions/PostActions'


const mapStateToProps = ({ postState }) => {
  return { postState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postPost: (newPost) => dispatch(UploadNewPost(newPost))
  }
}



const PostEntry = (props) => {

    const [info, setInfo] = useState({likes: 0})
  
    
    const handleChange = (e) => {

        let update = e.target.value

        switch (e.target.id) {

            case 'c_name':
                setInfo({
                    ...info,
                    country_name: update
                })
                break;

            case 'content':
                setInfo({
                    ...info,
                    content: update
                })
                break;

            case 'img':
                setInfo({
                    ...info,
                    img: update
                })
                break;


        }


    }

    const doingASubmit = (e) => {

        e.preventDefault()
        console.log(info)
        
        props.postPost({info})


    }

  useEffect(() => {
        
  },[])
  
  return (

    <div>
        <form onSubmit={doingASubmit}>
            <input type='text' onChange={handleChange} placeholder='Location Name' id='c_name'/><br />
            <textarea onChange={handleChange} placeholder='Review' id='content'/><br />
            <input type='text' onChange={handleChange} placeholder='Image URL' id='img'/><br />
            <input type='submit' />
        </form>
    </div>
   
  )

}
export default connect(mapStateToProps, mapDispatchToProps)(PostEntry)