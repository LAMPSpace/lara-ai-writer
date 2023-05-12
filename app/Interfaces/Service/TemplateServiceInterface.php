<?php

namespace App\Interfaces\Service;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Http\Request;

interface TemplateServiceInterface
{
    public function list(Request $request): Collection | LengthAwarePaginator;
    public function find(string $uuid): ?Model;
    public function getPerPage(array $params): array;
    public function getUrlParams(Request $request): array;
}
