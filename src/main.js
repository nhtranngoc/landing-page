import Vue from 'vue'
import VueMobileDetection from 'vue-mobile-detection';
import VueRouter from 'vue-router';

import App from './App.vue';
import Home from './Home.vue';
import About from './About.vue';

Vue.use(VueMobileDetection);
Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
  {path: '/', component: Home},
  {path: '/about', component: About}
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');