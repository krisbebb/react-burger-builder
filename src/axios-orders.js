import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-my-burger-ea5ab.firebaseio.com/'
})

export default instance