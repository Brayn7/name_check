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
          "state_province": '',
          country: '',
         },

         updated(){
          console.log('test');
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
               name: this.addRecipient.name,
            })
            .then(function (response) {
              that.response.status = response.status;
              that.response.msg = response.data.msg;
              that.response.style = response.data.style;
              that.getRecipients();
              that.addRecipient.name = "";
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

         handleRecipientInfoFormSubmit: function(){
            const that = this,
                  user = JSON.parse(window.localStorage.getItem('authUser'));
            const header = {
               'Accept': 'application/json',
               'Authorization': 'Bearer ' + user.access_token,
            };
            axios.patch('/api/recipients/' + that.infoRecipient.id, {
               headers: header,
               payload: that.infoRecipient
            })
            .then(function (response) {
              console.log(response);
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
            this.infoRecipient = {
              id: '',
              name: '',
              type: '',
              id_number: '',
              address: '',
              city: '',
              "state_province": '',
              country: '',
            };
         },

         handleDelete: function(){
          const that = this,
                  user = JSON.parse(window.localStorage.getItem('authUser'));
            const header = {
               'Accept': 'application/json',
               'Authorization': 'Bearer ' + user.access_token,
            };
            axios.delete('/api/recipients/' + that.infoRecipient.id, {
               headers: header,
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
            this.infoRecipient = {};
         },

         populateInfoModal: function(e){
          let selected = this.recipientData.filter((recip)=>{
            return recip.id === parseInt(e.target.id);
          }); 
          selected = selected[0];
          this.infoRecipient.id = e.target.id;
          this.infoRecipient.name = selected.name;
          this.infoRecipient.type = selected.type;
          this.infoRecipient.id_number = selected.id_number;
          this.infoRecipient.address = selected.address;
          this.infoRecipient.city = selected.city;
          this.infoRecipient["state_province"] = selected.state_province;
          this.infoRecipient.country = selected.country;
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