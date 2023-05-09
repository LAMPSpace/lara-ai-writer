<?php

namespace App\Repositories;

use App\Models\Template;
use App\Interfaces\TemplateRepositoryInterface;

class TemplateRepository extends BaseRepository implements TemplateRepositoryInterface
{
    public function __construct(Template $model)
    {
        $this->model = $model;
    }
}
