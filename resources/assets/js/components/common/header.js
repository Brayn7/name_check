import Vue from 'vue';
let Header = Vue.component('header-vue', {

   template: require('./Header.html'),
<<<<<<< HEAD
=======
   
>>>>>>> ebc6c6e86793c326c3e7aefa42eefa88632f3367
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