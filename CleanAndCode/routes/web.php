<?php

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

Auth::routes();

Route::get('/', 'IndexController@index')->name('index');

Route::get('/home', 'HomeController@index')->name('home');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/cleaner', 'HomeController@cleaner')->name('cleaner');

Route::get('/editProfile', 'HomeController@goToEditProfile');

Route::post('/editProfile', 'HomeController@EditProfile')->name('editProfile');

Route::get('/editPassword', 'HomeController@goToEditPassword');

Route::post('/editPassword', 'HomeController@EditPassword')->name('editPassword');
