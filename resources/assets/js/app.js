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
import Footer from './components/common/footer.js';
import Home from './components/home/home.js'
import Login from './components/login/login.js';
import Register from './components/register/register.js';
import Dashboard from './components/dashboard/dash.js';
import Recipients from './components/recipients/recipients.js';
import About from './components/about/about.js'
import Contact from './components/contact/contact.js'



// initiate a main component
let MainVue = Vue.component('main-vue', {
   template: require('./Main.html'),
});

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home'
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
  },
  {
    path: '/recipients',
    component: Recipients,
    name: 'recipients',
    meta: { 
      requiresAuth: true, 
      requiresRecipientList: true }
  },
    {
    path: '/about',
    component: About,
    name: 'about',
  },
    {
    path: '/contact',
    component: Contact,
    name: 'contact',
  }

];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  const authUser = JSON.parse(window.localStorage.getItem('authUser'));
  if (to.meta.requiresAuth){
    if (authUser && authUser.access_token){
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
  



