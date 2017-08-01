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
import Login from './components/login/login.js';

import Register from './components/register/register.js';
import Dashboard from './components/dashboard/dash.js';
// initiate a main component
let MainVue = Vue.component('main-vue', {
   template: require('./Main.html'),
});

const routes = [
  {
    path: '/',
    redirect: '/signin'
  },
  {
    path: '/signup',
    component: Register,
    name: 'register'
  },
  {
    path: '/signin',
    component: Login,
    name: 'signin'
  },
  {
    path: '/dashboard',
    component: Dashboard,
    name: 'dashboard'
  }
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
}).$mount('#app');


