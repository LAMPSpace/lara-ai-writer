<?php

namespace App\Interfaces;

interface DocumentRepositoryInterface
{
    public function all();
    public function create(array $data);
    public function update(array $data, string $uuid);
    public function delete(string $uuid);
    public function find(string $uuid);
}