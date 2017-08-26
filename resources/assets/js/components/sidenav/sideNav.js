import Vue from 'vue';

let SideNav = Vue.component('sidenav', {

   template: require('./SideNav.html'),
   
   props: ['isloggedin'],

   data: function () {
      return {
    
      }
   }


});

export default SideNav;