<?php

use App\Http\Controllers\CandidateController;
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
    return view('app.app');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

require __DIR__.'/auth.php';

Route::resource('candidate',CandidateController::class);
Route::delete('academic-formation/{id}',[CandidateController::class, 'destroyAcademicFormation'])->name('academic-formation.destroy');
Route::delete('professional-experience/{id}',[CandidateController::class, 'destroyProfessionalExperience'])->name('professional-experience.destroy');
