import Client from '.'


export const GetPosts = async () => {
  try {
    const res = await Client.get(`posts`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetPostDetails = async (id) => {
  try {
    const res = await Client.get(`posts/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const UploadPost = async (newPost) => {

  try {
    console.log(newPost)
    const res = await Client.post('posts', newPost)
    return res.data

  } catch (error) {
    throw error
  }



}