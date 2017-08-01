// inport vue
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

// initiate a main vue instance
// const app = new Vue({
//     el: '#app',
//     components:{
//       'main-vue': MainVue,
//     },
// });


// register a new user script
      // axios.post('api/register', {
      //   name: "hid",
      //   email: 'tesddddddd@gmail.com',
      //   password: 'adminroot',
      //   password_confirmation: 'adminroot',
      // })
      // .then(function (response) {
      //   console.log(response);
      // })
      // .catch(function (error) {
      //     console.log(error);
      // });

// login a user!      
      // axios.post('http://name_check.dev/oauth/token', {
      //   grant_type: 'password',
      //   client_id: '3',
      //   client_secret:'TbzsvlmMo68wf8PgCD5Xt3OY3ZjrM8ooDo4quUbg',
      //   username: 'bryarobert@gmail.com',
      //   password: 'adminroot',
      //   scope: ''
      // })
      // .then(function (response) {
      //   axios.get('http://name_check.dev/api/user', {
          
      //   }).then(function(response){
      //     console.log(response);
      //   });
      // })
      // .catch(function (error) {
      //     console.log(error);
      // });
