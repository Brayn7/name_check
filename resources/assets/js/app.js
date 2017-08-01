// https://www.youtube.com/watch?v=rarBXfEXouc&t=461s thanks to this dude.

// import vue
window.Vue = require('vue');

// axios for ajax calls

import Axios from 'axios';

// import router
import VueRouter from 'vue-router';
Vue.use(VueRouter);
// requires bootstraps js
require('./bootstrap');

// load components
let HeaderVue = require('./components/common/header.js');
let Login = require('./components/login/login.js');
let Register = require('./components/register/register.js');
// initiate a main component
let MainVue = Vue.component('main-vue', {
   template: require('./Main.html'),
});

const routes = [{
  path: '/',
  component: MainVue,
  name: 'home'
}];

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  router,
}).$mount('#app');


