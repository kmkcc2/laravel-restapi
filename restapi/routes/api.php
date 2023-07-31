<?php

use App\Http\Controllers\Api\V1\CustomerController;
use App\Http\Controllers\Api\V1\InvoiceController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// api/v1
Route::group(['prefix' => 'v1', 'namespace' => 'App\Http\Controllers\Api\V1', 'middleware => auth:api'],  function(){
        Route::apiResource('customers', CustomerController::class)->middleware('auth:sanctum');
        Route::apiResource('invoices', InvoiceController::class)->middleware('auth:sanctum');
        Route::post('invoices/bulk', ['uses' => 'InvoiceController@bulkStore'])->middleware('auth:sanctum');
});

//login and register
Route::controller(RegisterController::class)->group(function () {
    Route::post('/register', 'store');
});

Route::controller(LoginController::class)->group(function () {
    Route::post('/login', 'login');
    Route::post('/logout', 'logout')->middleware('auth:sanctum');
});
// Route::post('api/register', ['uses' => 'Api/Controllers/RegisterController@store']);
