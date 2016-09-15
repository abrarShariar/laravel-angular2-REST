<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/
//Resources controller routes goes here
//root page
Route::get('/','MainController@index');

//test route
//Route::get('/delete/id={id}','EmployeeController@delete');
