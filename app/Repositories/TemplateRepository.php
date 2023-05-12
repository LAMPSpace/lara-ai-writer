<?php

namespace App\Repositories;

use App\Models\Template;
use App\Interfaces\Repository\TemplateRepositoryInterface;

class TemplateRepository extends FilterSortRepository implements TemplateRepositoryInterface
{
    public function __construct(Template $model)
    {
        $this->model = $model;
    }
}
