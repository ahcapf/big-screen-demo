import axios from 'axios'
axios.defaults.timeout = 50000
axios.defaults.withCredentials = true
axios.defaults.baseURL = '/'

class RequestError extends Error {
  constructor (message) {
    super(message)
    this.name = 'RequestError'
  }
}

axios.interceptors.request.use(config => {
  if (config.method === 'get') {
    if (!config.params) {
      config.params = {}
    }
    config.params._v = Date.now() // 添加参数，去缓存
  }
  if (!config.headers) {
    config.headers = {}
  }
  return config
},
error => Promise.reject(error)
)
axios.interceptors.response.use(response => {
  return response.data
}, error => {
  if (error.response) { // 响应错误
    return Promise.reject(error)
  } else if (error.request) { // 请求无响应
    return Promise.reject(error)
  } else {
    return Promise.reject(error)
  }
})

function _request (options = {}) {
  if (!options.method || !options.url) {
    throw new RequestError('Parameter cannot be empty!')
  }
  return axios.request(options)
}

export default {
  get (url, params = null, options = null) {
    return _request({
      url,
      method: 'get',
      params,
      ...options
    })
  },
  post (url, data = null, options = null) {
    return _request({
      url,
      method: 'post',
      data,
      ...options
    })
  },
  delete (url, data = null, options = null) {
    return _request({
      url,
      method: 'delete',
      data,
      ...options
    })
  },
  put (url, data = null, options = null) {
    return _request({
      url,
      method: 'put',
      data,
      ...options
    })
  }
}
