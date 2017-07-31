// inport vue
window.Vue = require('vue');



// import router
import VueRouter from 'vue-router';

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

// initiate a main vue instance
const app = new Vue({
    el: '#app',
    components:{
      'main-vue': MainVue,
    }
});
