<?php

namespace App\Models;

use App\Traits\UUID;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Template extends Model
{
    use HasFactory, UUID;

    protected $primaryKey = 'uuid';
    protected $table = 'templates';
    public $timestamps = false;

    protected $fillable = [
        'categories_uuid',
        'name',
        'route',
        'icon',
        'description',
        'prompt',
        'views'
    ];
}
