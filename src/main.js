import Vue from 'vue'
import App from './App.vue'
// import ColorPicker from './color-picker/index'
import vuy from '../packages/index'
Vue.config.productionTip = false
Vue.use(vuy)

new Vue({
  render: h => h(App),
}).$mount('#app')
