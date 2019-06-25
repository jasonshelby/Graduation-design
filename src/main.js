import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

Vue.config.productionTip = false

function IsPC() {
  var userAgentInfo = navigator.userAgent;
  var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"];
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
}
Vue.mixin({
  data: function () {
    return {
      host: 'http://39.107.126.150:80',
      isPC: IsPC(),
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
