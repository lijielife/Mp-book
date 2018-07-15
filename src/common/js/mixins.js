//  页面公共
export const share = {
  onShareAppMessage(res) {
    let target = res.from
    console.log(target) // 触发对象 'menu'或者'button'
    return {
      title: '梯递食堂',
      path: '/page/index/main'
    }
  }
}
