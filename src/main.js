import Vue from 'vue'
import VueMobileDetection from 'vue-mobile-detection';
import VueRouter from 'vue-router';
import VueGtag from 'vue-gtag';

import App from './App.vue';
import Home from './Home.vue';
import About from './About.vue';
import AboutSite from './AboutSite.vue';
import HireMe from './HireMe.vue';

import Project from './Projects/Project.vue';
import vuetify from './plugins/vuetify';

Vue.use(VueMobileDetection);
Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
  {
    path: '/', 
    component: Home,
    name: 'Home'
  },
  {
    path: '/about',
    component: About,
    name: 'About Me'
  },
  {
    path: '/site',
    component: AboutSite,
    name: 'About Site'
  },
  {
    path: '/hireme',
    component: HireMe,
    name: 'Hire Me'
  },
  {
    path: '/projects/:category',
    component: Project
  }];

const router = new VueRouter({
  routes
});

Vue.use(VueGtag, {
  config: {id: 'UA-173494737-1'},
  appName: 'namfromnam',
  pageTrackerScreenviewEnableD: true
}, router);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');