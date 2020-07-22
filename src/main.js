import Vue from 'vue'
import App from './App.vue'

import VueMobileDetection from 'vue-mobile-detection';
Vue.use(VueMobileDetection);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
