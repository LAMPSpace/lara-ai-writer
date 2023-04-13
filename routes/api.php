<?php

use App\Http\Controllers\DocumentController;
use App\Http\Controllers\TemplateController;
use App\Http\Controllers\UserController;
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

Route::get('/me', [UserController::class, 'me'])->middleware('auth:sanctum');
Route::apiResource('users', UserController::class)->middleware('auth:sanctum');
Route::apiResource('templates', TemplateController::class);
Route::apiResource('documents', DocumentController::class);
