<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AcademicFormation extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'initial_date',
        'final_date',
        'is_current',
    ];

    public function user(){
        return $this->hasOne(User::class);
    }
}
