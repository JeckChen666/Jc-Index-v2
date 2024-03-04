import { defineStore } from 'pinia'

/**
 * 参考资料：
 * pinia保姆级教程，十分钟快速上手！
 * https://zhuanlan.zhihu.com/p/664785495
 */
export const useDefaultStore = defineStore('default', {
  state: () => ({
    token: '',
    axiosPromiseCancel: [] // 接口请求存放的数组
  }),
  getters: {
    getToken() {
      return this.token
    }
  },
  actions: {
    clearToken() {
      this.token = ''
    },
    /*设置token*/
    setToken(data) {
      this.token = data || ''
    },
    /*请求依次添加到数组中*/
    setAxiosPromiseCancelArr(cancel) {
      this.axiosPromiseCancel.push(cancel)
    },
    /*取消数组中的所有请求，并重置为空数组*/
    clearAxiosPromiseCancelArr() {
      if (this.axiosPromiseCancel.length !== 0) {
        this.axiosPromiseCancel.forEach((e) => {
          e && e.f()
        })
        this.axiosPromiseCancel = []
      }
    },
    /*取消当前数组中的重复请求*/
    clearCurrentAxiosPromiseCancel(index) {
      this.axiosPromiseCancel[index].f()
      this.axiosPromiseCancel.splice(index, 1)
    }
  },
  persist: true
})
