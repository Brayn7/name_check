import Vue from 'vue';

let Message = Vue.component('message', {

   template: require('./Message.html'),

   props: ['message'],

   data: function(){
      return {
         messaging: this.message,
      }
   },

});

export default Message;