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

##################### Questions Routes #############################################################

Route::get('Questions', 'QuestionController@index')->name('question.index');
Route::get('Questions/create', 'QuestionController@create')->name('question.create');
Route::post('Questions/store', 'QuestionController@store')->name('question.store');
Route::get('Questions/{question}', 'QuestionController@show')->name('question.show');
Route::delete('Questions/{question}/delete', 'QuestionController@destroy')->name('question.destroy');
Route::get('Questions/{question}/edit', 'QuestionController@edit')->name('question.edit');
Route::put('Questions/{questionid}', 'QuestionController@update')->name('question.update');

##################### Answers Routes #############################################################

Route::get('Answers', 'AnswerController@index')->name('answer.index');
Route::get('Answers/create', 'AnswerController@create')->name('answer.create');
Route::post('Answers/store', 'AnswerController@store')->name('answer.store');
Route::get('Answers/{answer}', 'AnswerController@show')->name('answer.show');
Route::delete('Answers/{answer}/delete', 'AnswerController@destroy')->name('answer.destroy');
Route::get('Answers/{answer}/edit', 'AnswerController@edit')->name('answer.edit');
Route::put('Answers/{answerid}', 'AnswerController@update')->name('answer.update');


##################### Orders Routes #############################################################

Route::get('/orders', 'OrderController@index')->name('orders.index');
Route::get('/orders/create', 'OrderController@create')->name('orders.create');
Route::post('/orders', 'OrderController@store')->name('orders.store');
Route::get('/orders/{order}', 'OrderController@show')->name('orders.show');
Route::get('/orders/{order}/edit', 'OrderController@edit')->name('orders.edit');
Route::put('/orders/{order}', 'OrderController@update')->name('orders.update');
Route::delete('/orders/{order}/delete', 'OrderController@destroy')->name('orders.destroy');

