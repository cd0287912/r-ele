import axios from 'axios'
import {getStorage} from "./../utlis/store"
const { baseURL } = require('./../config')

const instance = axios.create({
  baseURL
})

instance.interceptors.request.use(
  config => {
    config.headers.authorization = getStorage("TOKEN")
    return config
  },
  error => {}
)

instance.interceptors.response.use(
  response => {
    return response.data
  },
  error => {}
)

export default instance