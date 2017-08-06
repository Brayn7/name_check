import Vue from 'vue';

let Register = Vue.component('register', {

   template: require('./Register.html'),

   data: function(){
      return {
         register: {
            name:"",
            organization_name: "",
            email: "",
            password: "",
            password_confirmation: "",
         },
         handleRegisterFormSubmit: function () {
            const that = this;
            axios.post('api/signup', {
               name: this.register.name,
               organization_name: this.register.organization_name,
               email: this.register.email,
               password: this.register.password,
               password_confirmation: this.register.password_confirmation,
            })
            .then(function (response) {
              console.log(response);
              that.$router.push({name: 'signin'})
            })
            .catch(function (error) {
                console.log(error);
            });
         },
      };
   }

});

export default Register;