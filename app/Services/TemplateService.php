<?php

namespace App\Services;

use App\Interfaces\TemplateRepositoryInterface;

class TemplateService
{
    protected TemplateRepositoryInterface $repository;

    public function __construct(TemplateRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    public function all()
    {
        return $this->repository->all();
    }

    public function find(string $uuid)
    {
        return $this->repository->find($uuid);
    }
}
