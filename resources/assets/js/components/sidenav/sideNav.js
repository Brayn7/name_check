import Vue from 'vue';

let SideNav = Vue.component('sidenav', {

   template: require('./SideNav.html'),
   
   props: ['isloggedin'],

   data: function () {
      return {
         handleLogout: function(){
            // removes authUser (token and user info) from local storage
            window.localStorage.removeItem('authUser');
            // redirect to home page
            this.$router.push({name: '/'});
         }
      }
   }


});

export default SideNav;