import Vue from 'vue';
let Header = Vue.component('header-vue', {

   template: require('./Header.html'),

   updated(){
      this.loggedin = (window.localStorage.getItem('authUser')) ? true : false;
   },
   data: function(){
      return { 
         loggedin: (window.localStorage.getItem('authUser')) ? true : false,

         handleLogout: function(){
            // removes authUser (token and user info) from local storage
            window.localStorage.removeItem('authUser');
            // redirect to home page
            this.$router.push({name: '/'});
         }
      }
   }
});

export default Header;