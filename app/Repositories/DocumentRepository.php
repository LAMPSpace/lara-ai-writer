<?php

namespace App\Repositories;

use App\Models\Document;
use App\Interfaces\Repository\DocumentRepositoryInterface;

class DocumentRepository extends FilterSortRepository implements DocumentRepositoryInterface
{
    public function __construct(Document $model)
    {
        $this->model = $model;
    }
}
