<?php

namespace App\Models;

use App\Traits\UUID;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    use HasFactory, UUID;

    protected $primaryKey = 'uuid';
    protected $table = 'settings';
    public $timestamps = false;

    protected $fillable = [
        'name',
        'value'
    ];
}
