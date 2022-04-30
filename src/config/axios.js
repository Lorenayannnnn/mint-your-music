/**
 * @Description: Axios configuration
 * @author Tianyi(Lorena) Yan
 */
import Axios from 'axios'
import { Message } from 'element-ui';

Axios.defaults.withCredentials = true;

Axios.interceptors.request.use((config) => {
  config.headers['Authorization'] = '21049794-0166-44a9-9c7f-8a8175c3dca0'
  return config;
}), (error) => {
  Message.error(error)
  console.log(error);
  return Promise.reject(error);
}

Axios.interceptors.response.use((response) => {
  return Promise.resolve(response.data);
},(error) => {
  console.log(error);
  return Promise.reject(error);
})



export default Axios
