import Vue from 'vue';

let Recipients = Vue.component('recipients', {

   template: require('./Recipients.html'),
   
   created(){
      const that = this,
            user = JSON.parse(window.localStorage.getItem('authUser'));
            console.log(user.id);
      const header = {
         'Accept': 'application/json',
         'Authorization': 'Bearer ' + user.access_token,
      };

      axios.get('http://name_check.dev/api/recipients', {
         headers: header,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
          console.log(error);
      });
   },

   data: function(){
      return {
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

            axios.post('http://name_check.dev/api/recipients', {
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