import Vue from 'vue'
import App from './App.vue'
import { MdCard, MdButton, MdRipple } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VFC from 'vfc'
import 'vfc/dist/vfc.css'

Vue.use(VFC)
Vue.use(MdCard)
Vue.use(MdButton)
Vue.use(MdRipple)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
