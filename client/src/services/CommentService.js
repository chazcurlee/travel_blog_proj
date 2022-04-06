import Client from '.'


export const GetComments = async () => {
  try {
    const res = await Client.get(`comments`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetCommentDetails = async (id) => {
  try {
    const res = await Client.get(`comments/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}