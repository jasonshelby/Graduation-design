import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'



Vue.config.productionTip = false

Vue.mixin({
  data: function () {
    return {
      host: 'http://39.107.126.150:80',
    }
  },
})

new Vue({
  router,
  created() {
    console.log(this.host)
  },
  render: h => h(App)
}).$mount('#app')
