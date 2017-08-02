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
   $recipients = Recipient::all();
   $matches = array();
   foreach($recipients as $recipient){
      $name = $recipient->first_name . " " . $recipient->last_name;
      $check = App\Entry::search($name)->get();
      if (count($check) > 0){
         array_push($matches, $recipient);
      }
   }
   foreach($matches as $match){
      $recipient = new Recipient;
      $recipient = $recipient::find($match->id);
      $recipient->flagged = TRUE;
      $recipient->save();
   }
});

Route::resource('/reports', 'ReportsController');








