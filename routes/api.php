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

// routes defined here have a auto "/api/" prefix added
// middleware('auth:api') for authenticate user for accessiing the API

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');

//get specific employee where id == $id
Route::get('/show/id={id}','EmployeeController@show');
