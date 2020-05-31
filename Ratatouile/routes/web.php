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
    Route::get('Questions/create', 'QuestionController@create')->name('question.create');
    Route::post('Questions/store', 'QuestionController@store')->name('question.store');
    Route::get('Questions/{question}', 'QuestionController@show')->name('question.show');
    Route::delete('Questions/{question}/delete', 'QuestionController@destroy')->name('question.destroy');
    Route::get('Questions/{question}/edit', 'QuestionController@edit')->name('question.edit');
    Route::put('Questions/{questionid}', 'QuestionController@update')->name('question.update');

    //answers addresses routes
    Route::get('Answers', 'AnswerController@index')->name('answer.index');
    Route::get('Answers/create', 'AnswerController@create')->name('answer.create');
    Route::post('Answers/store', 'AnswerController@store')->name('answer.store');
    Route::get('Answers/{answer}', 'AnswerController@show')->name('answer.show');
    Route::delete('Answers/{answer}/delete', 'AnswerController@destroy')->name('answer.destroy');
    Route::get('Answers/{answer}/edit', 'AnswerController@edit')->name('answer.edit');
    Route::put('Answers/{answerid}', 'AnswerController@update')->name('answer.update');

});
