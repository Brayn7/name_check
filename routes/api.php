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
Route::resource('entries', 'EntriesController');

// endpoint that will contain recipient lists relavent to logged in user
Route::resource('recipients', 'RecipientsController');





