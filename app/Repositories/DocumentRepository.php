<?php

namespace App\Repositories;

use App\Models\Document;
use App\Interfaces\DocumentRepositoryInterface;

class DocumentRepository extends BaseRepository implements DocumentRepositoryInterface
{
    public function __construct(Document $model)
    {
        $this->model = $model;
    }
}
