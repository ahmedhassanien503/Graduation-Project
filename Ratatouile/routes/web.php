<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/admin', function () {
    return view('admin');
});

######################   Seasons Routes ##########################################################
Route::get('/seasons', 'SeasonController@index')->name('seasons.index');
Route::get('/seasons/create', 'SeasonController@create')->name('seasons.create');
Route::post('/seasons', 'SeasonController@store')->name('seasons.store');
Route::get('/seasons/{season}', 'SeasonController@show')->name('seasons.show');
Route::get('/seasons/{season}/edit', 'SeasonController@edit')->name('seasons.edit');
Route::put('/seasons/{season}', 'SeasonController@update')->name('seasons.update');
Route::delete('/seasons/{season}/delete', 'SeasonController@destroy')->name('seasons.destroy');


##################### Workshop Routes #############################################################

Route::get('/workshops', 'WorkshopController@index')->name('workshops.index');
Route::get('/workshops/create', 'WorkshopController@create')->name('workshops.create');
Route::post('/workshops', 'WorkshopController@store')->name('workshops.store');
Route::get('/workshops/{workshop}', 'WorkshopController@show')->name('workshops.show');
Route::get('/workshops/{workshop}/edit', 'WorkshopController@edit')->name('workshops.edit');
Route::put('/workshops/{workshop}', 'WorkshopController@update')->name('workshops.update');
Route::delete('/workshops/{workshop}/delete', 'WorkshopController@destroy')->name('workshops.destroy');
