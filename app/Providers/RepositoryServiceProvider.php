<?php

namespace App\Providers;

use App\Interfaces\Repository\DocumentRepositoryInterface;
use App\Interfaces\Repository\TemplateRepositoryInterface;

use App\Interfaces\Service\DocumentServiceInterface;
use App\Interfaces\Service\TemplateServiceInterface;

use App\Repositories\TemplateRepository;
use App\Repositories\DocumentRepository;

use App\Services\DocumentService;
use App\Services\TemplateService;
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

        $this->app->bind(DocumentServiceInterface::class, DocumentService::class);
        $this->app->bind(TemplateServiceInterface::class, TemplateService::class);
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
