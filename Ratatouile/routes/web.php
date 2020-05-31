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


//Recipes Routes

Route::get('/recipes', 'RecipeController@index')->name('recipes.index');
Route::get('/recipes/create','RecipeController@create')->name('recipes.create');
Route::get('/recipes/{recipe}', 'RecipeController@show')->name('recipes.show');
Route::post('/recipes','RecipeController@store')->name('recipes.store');
Route::delete('/recipes/{recipe}','RecipeController@destroy')->name('recipes.destroy');
Route::get('/recipes/{recipe}/edit','RecipeController@edit')->name('recipes.edit');
Route::put('/recipes/{recipe}','RecipeController@update')->name('recipes.update');


//Categries Routes

Route::get('/categories', 'CategoryController@index')->name('categories.index');
Route::get('/categories/create','CategoryController@create')->name('categories.create');
Route::get('/categories/{category}', 'CategoryController@show')->name('categories.show');
Route::post('/categories','CategoryController@store')->name('categories.store');
Route::delete('/categories/{category}','CategoryController@destroy')->name('categories.destroy');
Route::get('/categories/{category}/edit','CategoryController@edit')->name('categories.edit');
Route::put('/categories/{category}','CategoryController@update')->name('categories.update');