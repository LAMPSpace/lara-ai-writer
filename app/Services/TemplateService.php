<?php

namespace App\Services;

use App\Interfaces\Repository\TemplateRepositoryInterface;
use App\Interfaces\Service\TemplateServiceInterface;

class TemplateService extends FilterSortService implements TemplateServiceInterface
{
    public function __construct(TemplateRepositoryInterface $repository)
    {
        $this->repository = $repository;
        $this->model = $repository->getModel();
    }
}
