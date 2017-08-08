import Vue from 'vue';

let Login = Vue.component('login', {

   template: require('./Login.html'),

   data: function(){
      return {
      login:{
         username:'bryarobert@gmail.com',
         password:'adminroot',
      },

      authUser: {},

      handleLoginFormSubmit: function(){
        const that = this;
         // get access token from backend
         // stretch is to hide the client id and secret in backend and just send off username and pass
         axios.post('oauth/token', {
           grant_type: 'password',
           client_id: '11',
           client_secret:'rcfqFtXRF8OtsT4p4LljSg2262nEKgliyPlDJTUn',
           username: this.login.username,
           password: this.login.password,
           scope: ''
         })
         // on success get the user that logged in
         .then(function (response) {
          console.log('token');
          const header = {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + response.data.access_token,
          };

          // save tokens on authUser property
          that.authUser.access_token = response.data.access_token;
          that.authUser.refresh_token = response.data.refresh_token;
            
           // save tokens in local storage 
           window.localStorage.setItem('authUser', JSON.stringify(that.authUser))

          // get user data
           axios.get('api/user', {
             headers: header,
           }).then(function(response){
             console.log(response);

             // grab user info and save in session storage ;)
             that.authUser.id = response.data.id;
             that.authUser.name = response.data.name;
             that.authUser.organization_name = response.data.organization_name;
             that.authUser.email = response.data.email;

             window.localStorage.setItem('authUser', JSON.stringify(that.authUser));
             that.$router.push({name: 'dashboard'});
           });
          // end get user data 

         })
         // on auth/token fail
         .catch(function (error) {
             console.log(error);
         }); 
      }
    }
  },
});

export default Login;

