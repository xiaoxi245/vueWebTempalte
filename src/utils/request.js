import axios from 'axios'
import store from '../store'
import Nprogress from 'nprogress'
import { Message } from 'element-ui'

Nprogress.configure({ showSpinner: false })
const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 12000,
  headers: {
    'content-Type': 'application/json',
    Accept: 'application/json'
  }
})

// 请求拦截器
request.interceptors.request.use(
  config => {
    config.headers.token = store.state.token
    Nprogress.start()
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  response => {
    Nprogress.done()
    return response
  },
  error => {
    Message.error({
      message: error.message
    })
    Nprogress.done()
    return Promise.reject(error)
  }
)

export default request
