import Vue from 'vue';

let Dashboard = Vue.component('dash', {

   template: require('./Dash.html'),

    created(){
      this.getRecipients();
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

         addRecipient: {
            name: "",
         },

         infoRecipient: {
          id: '',
          name: '',
          type: '',
          id_number: '',
          address: '',
          city: '',
          state_province: '',
          country: '',
         },

         updated(){
          console.log('updated');
         },

         handleRecipientAddFormSubmit: function(){
            const that = this,
                  user = JSON.parse(window.localStorage.getItem('authUser'));
            const header = {
               'Accept': 'application/json',
               'Authorization': 'Bearer ' + user.access_token,
            };
            axios.post('/api/recipients', {
               headers: header,
               _token: user.access_token,
               id: user.id,
               name: this.addRecipient.name,
            })
            .then(function(response){
              that.getRecipients();
              that.addRecipient.name = "";
              successMessage(response, that);
            })
            .catch(function(response){
              errorMessage(response,that);
            });
         }, // end handleformsubmit

         handleRecipientInfoFormSubmit: function(){
            const that = this,
                id = that.infoRecipient.id,
                user = JSON.parse(window.localStorage.getItem('authUser'));

            const header = {
               'Accept': 'application/json',
               'Authorization': 'Bearer ' + user.access_token,
            };
            
            axios.patch('/api/recipients/' + id, {
               headers: header,
               payload: that.infoRecipient
            })
            .then(function(response){
              successMessage(response, that);
            })
            .catch(function (response) {
              errorMessage(response,that);
            });
         },

         handleDelete: function(){
          const that = this,
                id = that.infoRecipient.id,
                user = JSON.parse(window.localStorage.getItem('authUser'));

            const header = {
               'Accept': 'application/json',
               'Authorization': 'Bearer ' + user.access_token,
            };

            axios.delete('/api/recipients/' + id, {
               headers: header,
            })
            .then(function(response){
              let index = that.recipientData.findIndex((a) => {
               return a.id === id; 
              });

              Vue.delete(that.recipientData, index);

              successMessage(response, that);
            })
            .catch(function (response) {
              errorMessage(response,that);
            });
            this.infoRecipient = {};
         },

         populateInfoModal: function(e){
          let selected = this.recipientData.filter((recip)=>{
            return recip.id === parseInt(e.target.id);
          }); 
          selected = selected[0];
          this.infoRecipient.id = parseInt(e.target.id);
          this.infoRecipient.name = selected.name;
          this.infoRecipient.type = selected.type;
          this.infoRecipient.id_number = selected.id_number;
          this.infoRecipient.address = selected.address;
          this.infoRecipient.city = selected.city;
          this.infoRecipient["state_province"] = selected.state_province;
          this.infoRecipient.country = selected.country;
          console.log(this.infoRecipient.id);
         },



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
              console.log('error from get recipients');
            });
         }           
      }
   }
});

export default Dashboard;