<?php

namespace App\Interfaces;

interface TemplateRepositoryInterface
{
    public function all();
    public function create(array $data);
    public function update(array $data, string $uuid);
    public function delete(string $uuid);
    public function find(string $uuid);
}
