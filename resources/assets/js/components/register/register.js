Vue.component('register', {

   template: require('./Register.html'),

   data: function(){
      return {
         register: {
            name:"Carla",
            organization_name: "Cornerstone",
            email: "Carla@cornerstone.com",
            password: "adminroot",
            password_confirmation: "adminroot",
         },
         handleRegisterFormSubmit: function () {
            axios.post('api/signup', {
               name: this.register.name,
               organization_name: this.register.organization_name,
               email: this.register.email,
               password: this.register.password,
               password_confirmation: this.register.password_confirmation,
            })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
         },
      };
   }

});