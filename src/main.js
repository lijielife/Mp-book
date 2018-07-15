import Vue from 'vue'
import App from './App'

import './common/stylus/index.styl'
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/index/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#333', // 底部bar字体颜色
      selectedColor: '#e60012', // 字体选中颜色
      backgroundColor: '#fff', // bar整体背景颜色
      borderStyle: 'black', // bar上方border颜色
      position: 'bottom',
      list: [{
        pagePath: 'pages/index/main',
        text: '首页',
        iconPath: 'static/images/icon-home@3x.png',
        selectedIconPath: 'static/images/icon-home-active@3x.png'
      }, {
        pagePath: 'pages/order-list/main',
        text: '订单',
        iconPath: 'static/images/icon-order@3x.png',
        selectedIconPath: 'static/images/icon-order-active@3x.png'
      }, {
        pagePath: 'pages/my/main',
        text: '我的',
        iconPath: 'static/images/icon-my@3x.png',
        selectedIconPath: 'static/images/icon-my-active@3x.png'
      }]
    }
  }
}
