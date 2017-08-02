<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// end point for registering new users
Route::post('/signup', 'SignUpController@signup');

// endpoint that will return the sdn list of names
Route::resource('/entries', 'EntriesController');

// endpoint that will contain recipient lists relavent to logged in user
Route::get('/recipients/{id}', 'RecipientsController@index');
// ->middleware('auth:api');
Route::post('/recipients', 'RecipientsController@store');


use App\Recipient;
use App\Entry;

Route::get('/check', function(){
   $recipientsLastName = Recipient::all();
   
   $Matches = array();
   
   foreach($recipientsLastName as $recipient){
       $lastNameMatches = Entry::where('last_name', '=', $recipient->last_name)->get();

       if (count($lastNameMatches) > 0){
            $firstNameMatches = $lastNameMatches->where('first_name', '=', $recipient->first_name);
            if(count($firstNameMatches) > 0){
               return $recipient;
            }
       }
   }
   return "no matches";
});

Route::resource('/reports', 'ReportsController');








