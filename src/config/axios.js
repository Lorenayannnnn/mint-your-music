/**
 * @Description: Axios configuration (loading, intercept requests and responses)
 * @author Tianyi(Lorena) Yan
 */
import Axios from 'axios'
import { Loading, Message } from 'element-ui';
var loading = null;

Axios.defaults.withCredentials = true;

Axios.interceptors.request.use((config) => {
  if (config.needLoading === undefined || config.needLoading) {
    loading = Loading.service({
      lock: true,
      text: config.message ? config.message : "Loading...",
      spinner: 'el-icon-loading',
      background: 'white'
    })
  }
}), (error) => {
  Message.error(error)
  console.log(error);
  return Promise.reject(error);
}

Axios.interceptors.response.use((response) => {
  if (loading != null) {
    loading.close();
  }
  if (response.data.code === '000') {
    return Promise.resolve(response.data);
  } else {
    Message.error(response.data.msg);
    return Promise.reject(response);
  }
},(error) => {
  console.log(error);
  return Promise.reject(error);
})



export default Axios
