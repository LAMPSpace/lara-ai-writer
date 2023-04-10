<?php

namespace App\Models;

use App\Traits\UUID;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory, UUID;

    protected $primaryKey = 'uuid';
    protected $table = 'categories';
    public $timestamps = false;

    protected $fillable = [
        'name',
        'color'
    ];
}
