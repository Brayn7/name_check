
window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
    window.$ = window.jQuery = require('jquery');

   require('bootstrap');
   require('vue-router');
   Vue.use(VueRouter);
} catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });


// bootstrap axios calls

function resetStyle(response, that){
   setTimeout(function(){
    that.response.style = "";
   }, 2000);
} 

window.header = {
   info: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem('authUser')).access_token,
         }
};


window.successMessage = function (response, that) {
   that.response.status = response.status;
   that.response.msg = response.data.msg;
   that.response.style = response.data.style;
   
   resetStyle(response,that);
};

window.errorMessage = function (response, that) {
   that.response.status = 403;
   that.response.msg = 'Oops something went wrong. Try again please.';
   that.response.style = 'alert-warning';
  
   resetStyle(response,that);
}



