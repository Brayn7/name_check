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
Route::post('/signup', 'AuthController@signup');

Route::post('/logout', 'AuthController@logout');

// endpoint that will return the sdn list of names
Route::resource('/entries', 'EntriesController');

// endpoint that will contain recipient lists relavent to logged in user
Route::get('/recipients/{id}', 'RecipientsController@index')->middleware('auth:api');

// endpoint for storing recipients names
Route::post('/recipients', 'RecipientsController@store');
Route::patch('/recipients/{id}', 'RecipientsController@update');
Route::delete('/recipients/{id}', 'RecipientsController@destroy');










