<?php

namespace App\Models;

use App\Traits\UUID;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Document extends BaseModel
{
    use HasFactory, UUID;

    protected $primaryKey = 'uuid';
    protected $table = 'documents';
    public $timestamps = true;

    protected $fillable = [
        'templates_uuid',
        'users_uuid',
        'name',
        'result',
        'words',
        'favorite'
    ];

    protected $defaultSortBy = 'created_at';

    protected $sortFields = [
        'created_at',
        'name',
        'uuid',
        'display'
    ];

    protected $filterFields = [
        'template',
        'favorite'
    ];

    protected $stringFields = [
        'name',
        'result',
        'template'
    ];

    protected $searchFields = [
        'name',
        'result',
    ];

    protected $customFields = [
        'template' => 'templates.name',
        'name' => 'documents.name'
    ];

    protected $customSorts = [
        'display' => [
            [
                'sort-by' => 'color',
                'sort' => 'asc'
            ],
            [
                'sort-by' => 'icon',
                'sort' => 'desc'
            ],
        ]
    ];

    protected $perPage = 10;

    public function scopeGetAllInformation($query)
    {
        return $query->join('templates', 'templates.uuid', 'documents.templates_uuid')
            ->join('categories', 'categories.uuid', 'templates.categories_uuid')
            ->select(
                'documents.uuid as uuid',
                'documents.name as name',
                'documents.result as result',
                'documents.words as words',
                'documents.favorite as favorite',
                'documents.created_at as created_at',
                'templates.uuid as template_uuid',
                'templates.icon as icon',
                'templates.name as template_name',
                'categories.color as color',
            );
    }
}
