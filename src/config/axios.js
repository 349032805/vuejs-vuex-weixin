import Qs from 'qs'
import axios from "axios"
var url = location.origin


axios.defaults.baseURL = url;

axios.defaults.timeout = 5000;


axios.defaults.transformRequest = [function(data) {
  data = Qs.stringify(data)
  return data
}]

axios.defaults.transformResponse = [function(data) {
  data = JSON.parse(data)
  return data
}]


axios.interceptors.request.use(function(config) {
  console.log("请求开始")
  return config;
}, function(error) {
  return Promise.reject(error);
});

axios.interceptors.response.use((res) => {
  console.log("请求结束 ")
  return res;
}, (error) => {
  return Promise.reject(error);
});


function http(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, { params: params })
      .then((res) => {
        resolve(res.data)
      }).catch(err => {
      if (err == "Error: timeout of 5000ms exceeded") {
        console.log("服务器请求超时")
        return
      }
      alert(err)
    })
  })

}
export default http
