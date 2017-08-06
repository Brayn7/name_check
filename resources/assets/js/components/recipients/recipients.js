import Vue from 'vue';

let Recipients = Vue.component('recipients', {

   template: require('./Recipients.html'),
   
   created(){
      console.log(this.recipient);
      const that = this,
            user = JSON.parse(window.localStorage.getItem('authUser'));
            console.log(user.id);
      const header = {
         'Accept': 'application/json',
         'Authorization': 'Bearer ' + user.access_token,
      };

      axios.get('api/recipients/' + user.id, {
         headers: header,
      })
      .then(function (response) {
        console.log(response);
        response.data.forEach( function(person) {
           that.recipientData.push(person);
        });
        
      })
      .catch(function (error) {
          console.log(error);
      });
   },

   data: function(){
      return {
         recipientData: [],
         recipient: {
            first_name: "bob",
            last_name: "smith",
            aliases: "tray smith, bill smith",
         },
         handleRecipientAddFormSubmit: function(){
            const that = this,
                  user = JSON.parse(window.localStorage.getItem('authUser'));
                  console.log(user.id);
            const header = {
               'Accept': 'application/json',
               'Authorization': 'Bearer ' + user.access_token,
            };

            let aliases = JSON.stringify(this.recipient.aliases.split(",")); 

            axios.post('api/recipients', {
               headers: header,
               _token: user.access_token,
               id: user.id,
               first_name: this.recipient.first_name,
               last_name: this.recipient.last_name,
               aliases: aliases,
            })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
         }
      };
   }
});

export default Recipients;