import App from './App'
import './style/index.scss'
// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif
import uView from './uni_modules/vk-uview-ui';
// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
   app.use(uView)
  return {
    app
  }
}
// #endif