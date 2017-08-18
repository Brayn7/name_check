import Vue from 'vue';

let Dashboard = Vue.component('dash', {

   template: require('./Dash.html'),

    created(){
      this.getRecipients();
          $('#myModal').on('shown.bs.modal', function () {
            $('#myInput').focus();
            console.log('test');
          });
   },

   data: function(){
      return {
        response: {
          status: "",
          msg: "",
          style: "",
        },

         user: JSON.parse(window.localStorage.getItem('authUser')),
         openAddForm: function () {
            console.log('test');
         },

         recipientData: [],

         recipient: {
            name: "",
         },

         handleRecipientAddFormSubmit: function(){
            const that = this,
                  user = JSON.parse(window.localStorage.getItem('authUser'));
                  console.log(user.id);
            const header = {
               'Accept': 'application/json',
               'Authorization': 'Bearer ' + user.access_token,
            };
            axios.post('/api/recipients', {
               headers: header,
               _token: user.access_token,
               id: user.id,
               name: this.recipient.name,
            })
            .then(function (response) {
              that.response.status = response.status;
              that.response.msg = response.data.msg;
              that.response.style = response.data.style;
              that.getRecipients();
              setTimeout(function(){
                that.response.style = "";
              }, 2000);

            })
            .catch(function (error) {
              that.response.status = 403;
              that.response.msg = 'Oops something went wrong. Try again please.';
              that.response.style = 'alert-warning';
              setTimeout(function(){
                that.response.style = "";
              }, 2000);
            });

         }, // end handleformsubmit

         getRecipients: function () {
            const that = this,
            user = JSON.parse(window.localStorage.getItem('authUser'));
            const header = {
               'Accept': 'application/json',
               'Authorization': 'Bearer ' + user.access_token,
            };

            axios.get('api/recipients/' + user.id, {
               headers: header,
            })
            .then(function (response) {
              console.log(response);
              that.recipientData = [];
              response.data.forEach( function(person) {
                 that.recipientData.push(person);
              });
              
            })
            .catch(function (error) {
                console.log(error);
            });
         }           
      }
   }
});

export default Dashboard;