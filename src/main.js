// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/iconfont.css'
import './assets/styles/reset.css'

// 解决移动端 1px border的显示问题
import './assets/styles/border.css'

// 移动端300毫秒点击延迟解决方案
import fastClick from 'fastclick'

Vue.config.productionTip = false

fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
