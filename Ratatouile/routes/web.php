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
    return view('auth.login');
});

Route::get('/login/admin', 'Auth\LoginController@showAdminLoginForm')->name('admin.login');
Route::post('/login/admin', 'Auth\LoginController@adminLogin')->name('admin.post.login');

Route::group(['middleware' => ['auth.admin']], function () {
    Route::get('/admin', function () {return view('admin');})->name('admin');
    ######################   Recipes Routes ##########################################################
    Route::get('/recipes', 'RecipeController@index')->name('recipes.index');
    Route::get('/recipes/create','RecipeController@create')->name('recipes.create');
    Route::get('/recipes/{recipe}', 'RecipeController@show')->name('recipes.show');
    Route::post('/recipes','RecipeController@store')->name('recipes.store');
    Route::delete('/recipes/{recipe}','RecipeController@destroy')->name('recipes.destroy');
    Route::get('/recipes/{recipe}/edit','RecipeController@edit')->name('recipes.edit');
    Route::put('/recipes/{recipe}','RecipeController@update')->name('recipes.update');
    ######################   Categries Routes ##########################################################
    Route::get('/categories', 'CategoryController@index')->name('categories.index');
    Route::get('/categories/create','CategoryController@create')->name('categories.create');
    Route::get('/categories/{category}', 'CategoryController@show')->name('categories.show');
    Route::post('/categories','CategoryController@store')->name('categories.store');
    Route::delete('/categories/{category}','CategoryController@destroy')->name('categories.destroy');
    Route::get('/categories/{category}/edit','CategoryController@edit')->name('categories.edit');
    Route::put('/categories/{category}','CategoryController@update')->name('categories.update');
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
    ##################### Questions Routes ############################################################
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
    ###################### Applicants Routes ##########################################################
    Route::get('/applicants', 'WorkshopUsersController@index')->name('applicants.index');
    Route::get('/applicants/create', 'WorkshopUsersController@create')->name('applicants.create');
    Route::post('/applicants', 'WorkshopUsersController@store')->name('applicants.store');
    Route::get('/applicants/{applicant}', 'WorkshopUsersController@show')->name('applicants.show');
    Route::delete('/applicants/{applicant}/delete', 'WorkshopUsersController@destroy')->name('applicants.destroy');
    Route::get('/applicants/{applicant}/accept', 'WorkshopUsersController@accept')->name('applicants.accept');
    Route::get('/applicants/{applicant}/reject', 'WorkshopUsersController@reject')->name('applicants.reject');
    ##################### Orders Routes #############################################################
    Route::get('/orders', 'OrderController@index')->name('orders.index');
    Route::get('/orders/create', 'OrderController@create')->name('orders.create');
    Route::post('/orders', 'OrderController@store')->name('orders.store');
    Route::get('/orders/{order}', 'OrderController@show')->name('orders.show');
    Route::get('/orders/{order}/edit', 'OrderController@edit')->name('orders.edit');
    Route::put('/orders/{order}', 'OrderController@update')->name('orders.update');
    Route::delete('/orders/{order}/delete', 'OrderController@destroy')->name('orders.destroy');
    ##################### Users Routes #############################################################
    Route::get('users', 'UserController@userIndex')->name('users.index');
    Route::get('users/{user}/edit', 'UserController@userEdit')->name('users.edit');
    Route::put('users/{user}', 'UserController@userUpdate')->name('users.update');
    Route::delete('users/{user}/delete', 'UserController@userDestroy')->name('users.destroy');
    ##################### Chefs Routes #############################################################
    Route::get('chefs', 'ChefController@chefIndex')->name('chefs.index');
    Route::get('chefs/{chef}/edit', 'ChefController@chefEdit')->name('chefs.edit');
    Route::put('chefs/{chef}', 'ChefController@chefUpdate')->name('chefs.update');
    Route::delete('chefs/{chef}/delete', 'ChefController@chefDestroy')->name('chefs.destroy');
    ##################### SeasonalRecipes Routes #############################################################
    Route::get('/seasonalrecipes', 'SeasonalRecipeController@index')->name('seasonalrecipes.index');
    Route::get('/seasonalrecipes/create', 'SeasonalRecipeController@create')->name('seasonalrecipes.create');
    Route::post('/seasonalrecipes', 'SeasonalRecipeController@store')->name('seasonalrecipes.store');
    Route::get('/seasonalrecipes/{seasonalrecipe}', 'SeasonalRecipeController@show')->name('seasonalrecipes.show');
    Route::get('/seasonalrecipes/{seasonalrecipe}/edit', 'SeasonalRecipeController@edit')->name('seasonalrecipes.edit');
    Route::put('/seasonalrecipes/{seasonalrecipe}', 'SeasonalRecipeController@update')->name('seasonalrecipes.update');
    Route::delete('/seasonalrecipes/{seasonalrecipe}/delete', 'SeasonalRecipeController@destroy')->name('seasonalrecipes.destroy');
    
});

Auth::routes();
Route::get('/home', 'HomeController@index')->name('home');

