import Vue from 'vue';

let Register = Vue.component('register', {

   template: require('./Register.html'),

   data: function(){
      return {

          messaging: {
            status: "",
            msg: "",
            style: "",
          },
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
              if (response.data.errors){
                  that.messaging.status = response.status;
                  that.messaging.msg = response.data.errors[0];
                  that.messaging.style = 'alert-warning';
                  setTimeout(function(){
                    that.messaging.style ="";
                  }, 2000);
                } else {
                  that.$router.push({name: 'signin'});
                }

              
            })
            .catch(function(response) {
              errorMessage(that);
            });
         },
      };
   }

});

export default Register;