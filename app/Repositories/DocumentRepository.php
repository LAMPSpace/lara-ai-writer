<?php

namespace App\Repositories;

use App\Models\Document;
use App\Repositories\BaseRepository;
use App\Interfaces\DocumentRepositoryInterface;

class DocumentRepository extends BaseRepository implements DocumentRepositoryInterface
{
    protected $model;

    public function __construct(Document $model)
    {
        $this->model = $model;
    }

    public function all()
    {
        return $this->model->getAllInformation()->get();
    }
}
