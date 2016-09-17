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

//route for showing form
Route::get('/create','MainController@create');

//store data after form submission
Route::post('/employee/store','MainController@store');


//test route
//Route::get('/delete/id={id}','EmployeeController@delete');
