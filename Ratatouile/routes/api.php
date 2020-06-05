<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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


//recipes routes

Route::get('/recipes', 'Api\RecipeApiController@index')->name('recipes.index');
    Route::get('/recipes/create','Api\RecipeApiController@create')->name('recipes.create');
    Route::get('/recipes/{recipe}', 'Api\RecipeApiController@show')->name('recipes.show');
    Route::post('/recipes','Api\RecipeApiController@store')->name('recipes.store');
    Route::delete('/recipes/{recipe}','Api\RecipeApiController@destroy')->name('recipes.destroy');
    Route::get('/recipes/{recipe}/edit','Api\RecipeApiController@edit')->name('recipes.edit');
    Route::put('/recipes/{recipe}','Api\RecipeApiController@update')->name('recipes.update');