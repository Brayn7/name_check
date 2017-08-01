
Vue.component('login', {

   template: require('./Login.html'),
   data: function(){
      return {
      login:{
         username:"",
         password:"",
      },

      handleLoginFormSubmit: function(){
         // get access token from backend
         // stretch is to hide the client id and secret in backend and just send off username and pass
         axios.post('http://name_check.dev/oauth/token', {
           grant_type: 'password',
           client_id: '1',
           client_secret:'7kqK51HVpOCeRwBT1FZVPWUO1n3khwIfjvS9ebMt',
           username: "bryarobert@gmail.com",
           password: 'adminroot',
           scope: ''
         })
         // on success get the user that logged in
         .then(function (response) {
          console.log(response);
          const header = {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + response.data.access_token,
          }
          // get user data
           axios.get('http://name_check.dev/api/user', {
             headers: header,
           }).then(function(response){
             console.log(response);
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

