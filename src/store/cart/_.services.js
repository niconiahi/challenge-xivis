import axios from 'axios'

// Endpoints
export const getProducts = async () => {
  try {
    return await axios.get(`https://api.myjson.com/bins/wyjyh`)
  } catch (err) {
    console.log('getProducts ERROR', err)
  }
}
