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
Route::prefix('admin')->group(function () {
    //questions addresses routes
    Route::get('Questions', 'QuestionController@index')->name('question.index');
    Route::get('Question/create', 'QuestionController@create')->name('question.create');
    Route::post('Question/store', 'QuestionController@store')->name('question.store');
    Route::get('Question/{question}', 'QuestionController@show')->name('question.show');
    Route::DELETE('Question/{question}/delete', 'QuestionController@destroy')->name('question.destroy');
    Route::get('Question/{question}/edit', 'QuestionController@edit')->name('question.edit');
    Route::put('Question/{questionid}', 'QuestionController@update')->name('question.update');

});
