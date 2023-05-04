<?php

namespace App\Models;

use App\Traits\UUID;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory, UUID;

    protected $primaryKey = 'uuid';
    protected $table = 'images';
    public $timestamps = false;

    protected $fillable = [
        'users_uuid',
        'name',
        'style',
        'resolution',
        'result',
        'favorite'
    ];
}
