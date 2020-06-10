<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


//recipes routes

    Route::get('/recipes', 'API\RecipeApiController@index')->name('recipes.index');
    Route::get('/userrecipes', 'API\RecipeApiController@indexx')->name('recipes.indexx');

    Route::get('/recipes/create','API\RecipeApiController@create')->name('recipes.create');
    Route::get('/recipes/{recipe}', 'API\RecipeApiController@show')->name('recipes.show');
    Route::post('/recipes','API\RecipeApiController@store')->name('recipes.store');
    Route::delete('/recipes/{recipe}','API\RecipeApiController@destroy')->name('recipes.destroy');
    Route::get('/recipes/{recipe}/edit','API\RecipeApiController@edit')->name('recipes.edit');
    Route::put('/recipes/{recipe}','API\RecipeApiController@update')->name('recipes.update');

    ##################### Workshop Routes #############################################################
    Route::get('/workshops','API\WorkshopController@index')->middleware('auth:sanctum');
    Route::post('/workshops/store','API\WorkshopController@store')->middleware('auth:sanctum');
    Route::get('/workshops/{workshop}','API\WorkshopController@show')->middleware('auth:sanctum');
    Route::put('/workshops/update/{workshop}','API\WorkshopController@update')->middleware('auth:sanctum');

     ##################### Season Routes #############################################################
     Route::get('/seasons','API\SeasonController@index');
     Route::get('/seasons/{id}','API\SeasonController@show');
 
    ##################### Users Routes #############################################################
    Route::get('/users','API\UserController@index');
    Route::get('/users/{user}','API\UserController@show');
    ##################### Chefs Routes #############################################################
    Route::get('/chefs','API\ChefController@index');
    Route::get('/chefs/{chef}','API\ChefController@show');
    Route::put('/chef/edit/{chef}','API\ChefController@edit');
    ##################### Category Routes #########################################################
    Route::get('/categories','API\CategoryApiController@index');
    Route::get('/categories/{id}','API\CategoryApiController@show');
     
    ##################### Order Routes #############################################################
    Route::get('/orders','API\OrderController@index');
    Route::get('/orders/{order}','API\OrderController@show');
    Route::post('/orders','API\OrderController@store');



Route::post('/login', function (Request $request) {
    $request->validate([
        'email' => 'required|email',
        'password' => 'required',
        'device_name' => 'required'
    ]);

    $user = User::where('email', $request->email)->first();

    if (! $user || ! Hash::check($request->password, $user->password)) {
        throw ValidationException::withMessages([
            'email' => ['The provided credentials are incorrect.'],
        ]);
    }

    return $user->createToken($request->device_name)->plainTextToken;
});


