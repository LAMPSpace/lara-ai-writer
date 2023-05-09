<?php

namespace App\Models;

use App\Traits\UUID;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Template extends BaseModel
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

    public function scopeGetAllInformation($query)
    {
        return $query->join('categories', 'categories.uuid', 'templates.categories_uuid')
            ->select(
                'templates.uuid as uuid',
                'templates.name as name',
                'templates.route as route',
                'templates.icon as icon',
                'templates.description as description',
                'templates.prompt as prompt',
                'templates.views as views',
                'categories.name as category',
                'categories.color as color',
            );
    }
}
