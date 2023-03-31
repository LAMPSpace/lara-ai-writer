<?php

namespace App\Models;

use App\Traits\UUID;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Plan extends Model
{
    use HasFactory, UUID;

    protected $primaryKey = 'uuid';
    protected $table = 'plans';
    public $timestamps = false;

    protected $fillable = [
        'name',
        'description',
        'trial_days',
        'currency',
        'amount_month',
        'amount_year',
        'visibility',
        'features'
    ];
}
