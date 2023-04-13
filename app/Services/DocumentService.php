<?php

namespace App\Services;

use App\Interfaces\DocumentRepositoryInterface;

class DocumentService
{
    protected $repository;

    public function __construct(DocumentRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    public function all()
    {
        return $this->repository->all();
    }
}
