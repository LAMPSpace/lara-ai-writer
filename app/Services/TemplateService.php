<?php

namespace App\Services;

use App\Interfaces\TemplateRepositoryInterface;

class TemplateService extends BaseService
{
    public function __construct(TemplateRepositoryInterface $repository)
    {
        $this->repository = $repository;
        $this->model = $repository->getModel();
    }
}
