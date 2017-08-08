import Vue from 'vue';

let Register = Vue.component('register', {

   template: require('./Register.html'),

   data: function(){
      return {

          response: {
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
              console.log(response.data.errors.length > 0);
              if (response.data.errors.length > 0){
                  that.response.status = response.status;
                  that.response.msg = response.data.errors[0];
                  that.response.style = 'alert-warning';
                  setTimeout(function(){
                    that.response.style ="";
                  }, 2000);
                } else {
                  that.$router.push({name: 'signin'});
                }

              
            })
            .catch(function (response) {
                that.response.status = response.status;
                that.response.msg = response.data.msg;
                that.response.style = response.data.style;
              setTimeout(function(){
                that.response.style = "";
              }, 2000);
            });
         },
      };
   }

});

export default Register;