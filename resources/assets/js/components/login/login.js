
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
           client_id: '3',
           client_secret:'TbzsvlmMo68wf8PgCD5Xt3OY3ZjrM8ooDo4quUbg',
           username: this.login.username,
           password: this.login.password,
           scope: ''
         })
         // on success get the user that logged in
         .then(function (response) {
           axios.get('http://name_check.dev/api/user', {
             
           }).then(function(response){
             console.log(response);
           });
         })
         .catch(function (error) {
             console.log(error);
         }); 
      }
    }
 },
});

