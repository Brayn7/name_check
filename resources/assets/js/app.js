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
import HeaderVue from './components/common/header.js';
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
    name: 'signup'
  },
  {
    path: '/signin',
    component: Login,
    name: 'signin'
  },
  {
    path: '/dashboard',
    component: Dashboard,
    name: 'dashboard',
    meta: { requiresAuth: true }
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth){
    if (isAuthorized()){
      next();
    } else {
      next({name: 'signin'});
    }
  }
  next();
});

new Vue({
  router,
}).$mount('#app');


// methods

function isAuthorized (){
  if (window.localStorage.getItem('authUser') !== null){
    const authUser = JSON.parse(window.localStorage.getItem('authUser'));
    const header = {
    'Accept': 'application/json',
    'Authorization': 'Bearer ' + authUser.access_token,
  };
  axios.get('http://name_check.dev/api/user', {
     headers: header,
   }).then(function(response){
    if (response.status === 200){
      return true; 
    }
   });
  }
  
}   



