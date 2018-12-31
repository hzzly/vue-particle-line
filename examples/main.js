import Vue from 'vue'
import App from './App.vue'

// 导入组件库
import vueParticleLine from 'packages/index.js'
// 注册组件库
Vue.use(vueParticleLine)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
