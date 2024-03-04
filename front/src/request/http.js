import Axios from 'axios'
import qs from 'qs'
import { useDefaultStore } from '@/store/index'
import { ElMessage } from 'element-plus'

let CancelToken = Axios.CancelToken

const instance = Axios.create({
  timeout: 60000,
  withCredentials: false,
  baseURL: '',
  paramsSerializer: (params) => {
    return qs.stringify(params, { arrayFormat: 'repeat' })
  }
})

/*取消重复接口*/
const stopRepeatRequest = function (Store, config) {
  for (const k in Store.state.axiosPromiseCancel) {
    if (Store.state.axiosPromiseCancel[k].u === config.url + '&' + config.method) {
      Store.clearCurrentAxiosPromiseCancel(k)
    }
  }
}

// request拦截器
instance.interceptors.request.use(
  (config) => {
    const Store = useDefaultStore()
    const token = Store.getters.getToken()
    token && (config.headers.Authorization = token)
    stopRepeatRequest(Store, config) // 发起请求时，取消当前重复请求的接口
    // 发起请求时，保存当前页面的所有请求
    config.cancelToken = new CancelToken(function (c) {
      Store.commit('setAxiosPromiseCancelArr', { u: config.url + '&' + config.method, f: c })
    })

    return config
  },
  (error) => {
    // 请求发生错误时
    console.log('request:', error)
    // 判断请求超时
    if (error.code === 'ECONNABORTED' && error.message.includes('timeout')) {
      console.log('timeout请求超时')
    }
    // 需要重定向到错误页面
    const errorInfo = error.response
    console.log(errorInfo)
    if (errorInfo) {
      error = errorInfo.data // 页面那边catch的时候就能拿到详细的错误信息,看最下边的Promise.reject
      console.log(error)
      /* const errorStatus = errorInfo.status// 404 403 500 ...
                                $router.push({
                                    path: `/error/${errorStatus}`
                                }) */
    }
    return Promise.reject(error)
  }
)

// response拦截器
instance.interceptors.response.use(
  (response) => {
    const Store = useDefaultStore()
    let data = response.data
    setTimeout(() => {
      stopRepeatRequest(Store, response.config)
    }, 1000)
    return Promise.resolve(data)
  },
  (error) => {
    if (Axios.isCancel(error)) {
      console.log(error)
      return Promise.reject('Ajax Abort: 该请求在Axios拦截器中被中断')
    } else {
      ElMessage({
        message: `服务器错误！错误代码：${error.response.status}`,
        type: 'error'
      })
      return Promise.reject(error.response.data)
    }
  }
)
