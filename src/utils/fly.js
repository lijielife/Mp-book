import Vue from 'vue'
import { HOST, ERR_OK } from './config'
const Fly = require('flyio/dist/npm/wx.js') // wx.js为flyio的微信小程序入口文件
const fly = new Fly() // 创建fly实例

// 添加拦截器
fly.interceptors.request.use((config, promise) => {
  wx.showLoading({
    title: '加载中',
    mask: true
  })
  // 给所有请求添加自定义header
  config.headers['X-Tag'] = 'flyio'
  return config
})

fly.interceptors.response.use(
  (response, promise) => {
    let data = response.data
    if (typeof (data) === 'string' && data !== '') {
      data = JSON.parse(data)
    }
    if (data.code === ERR_OK) {
      data = data.data
    } else {
      wx.showLoading({
        title: data.message
      })
    }

    wx.hideLoading()
  },
  (err, promise) => {
    // Do something with response error
    console.log(err)
    promise.reject('ssss')
    wx.hideLoading()
  }
)

// 配置请求基地址
Vue.prototype.$http = fly
fly.config.baseURL = HOST

export default fly
