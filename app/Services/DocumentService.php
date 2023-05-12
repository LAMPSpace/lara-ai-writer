<?php

namespace App\Services;

use App\Interfaces\Repository\DocumentRepositoryInterface;
use App\Interfaces\Service\DocumentServiceInterface;

class DocumentService extends FilterSortService implements DocumentServiceInterface
{
    public function __construct(DocumentRepositoryInterface $repository)
    {
        $this->repository = $repository;
        $this->model = $repository->getModel();
    }
}
