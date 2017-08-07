import Vue from 'vue';

let Dashboard = Vue.component('dash', {

   template: require('./Dash.html'),

    created(){
      this.getRecipients();
   },

   data: function(){
      return {
         user: JSON.parse(window.localStorage.getItem('authUser')),

         recipientData: [],

         recipient: {
            first_name: "",
            last_name: "",
         },

         handleRecipientAddFormSubmit: function(){
            const that = this,
                  user = JSON.parse(window.localStorage.getItem('authUser'));
                  console.log(user.id);
            const header = {
               'Accept': 'application/json',
               'Authorization': 'Bearer ' + user.access_token,
            };
            axios.post('api/recipients', {
               headers: header,
               _token: user.access_token,
               id: user.id,
               first_name: this.recipient.first_name,
               last_name: this.recipient.last_name,
            })
            .then(function (response) {
              console.log(response);
              that.getRecipients();
            })
            .catch(function (error) {
                console.log(error);
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