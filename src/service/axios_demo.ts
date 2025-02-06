import axios from 'axios'
import { BASE_URL, TIME_OUT } from './request/config'
import commonReq from '@/service'

commonReq
  .get({
    url: '/test'
  })
  .then(function (res) {
    console.log('commonReq', res)
    return console.log(res)
  })

axios.interceptors.request.use(
  (config) => {
    console.log('request interceptor', config)
    console.log('request baseurl', BASE_URL)
    return config
  },
  (error) => {
    console.log('request interceptor error')
    return error
  }
)

axios.interceptors.response.use(
  (response) => {
    console.log('response interceptor')
    return response
  },
  (error) => {
    console.log('response interceptor error')
    return error
  }
)

// axios
//   // .get('http://127.0.0.1:4523/m1/5784364-5468739-default/test')
//   .get(BASE_URL + '/test')
//   .then((r) => console.log(r))
