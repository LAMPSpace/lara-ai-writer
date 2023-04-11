<?php

namespace App\Repositories;

use Illuminate\Database\Eloquent\Model;

abstract class BaseRepository
{
    protected $model;

    public function __construct(Model $model)
    {
        $this->model = $model;
    }

    public function create(array $data): Model
    {
        return $this->model->create($data);
    }

    public function update(array $data, string $uuid): bool
    {
        return $this->model->find($uuid)->update($data);
    }

    public function delete(string $uuid): bool
    {
        return $this->model->find($uuid)->delete();
    }

    public function find(string $uuid): ?Model
    {
        return $this->model->find($uuid);
    }
}
