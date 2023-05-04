<?php

namespace App\Providers;

use App\Interfaces\DocumentRepositoryInterface;
use App\Repositories\TemplateRepository;
use App\Interfaces\TemplateRepositoryInterface;
use App\Repositories\DocumentRepository;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(TemplateRepositoryInterface::class, TemplateRepository::class);
        $this->app->bind(DocumentRepositoryInterface::class, DocumentRepository::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
