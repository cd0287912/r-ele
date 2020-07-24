import axios from 'axios'
import {getStorage,setStorage} from "./../utlis/store"
const { baseURL } = require('./../config');

const instance = axios.create({
  baseURL
});

instance.interceptors.request.use(
  config => {
    config.headers.authorization = getStorage("TOKEN");
    return config
  },
  error => {}
);

instance.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    const {status} = error.response||error.response.status;
    switch(status){
      case 403:
        // 登录失效
        console.log('123');
        setStorage("TOKEN", '');
        window.location.reload();
        break;
      default:
        break
    }
  }
);

export default instance
