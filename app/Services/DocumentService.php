<?php

namespace App\Services;

use App\Interfaces\DocumentRepositoryInterface;

class DocumentService extends BaseService
{
    public function __construct(DocumentRepositoryInterface $repository)
    {
        $this->repository = $repository;
        $this->model = $repository->getModel();
    }
}
