import axios from 'axios'

const api = axios.create ({
    baseURL: 'https://unicar-w56x.onrender.com'
})

export default api