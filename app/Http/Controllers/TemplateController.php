<?php

namespace App\Http\Controllers;

use App\Http\Resources\TemplateCollection;
use App\Http\Resources\TemplateResource;
use App\Interfaces\Service\TemplateServiceInterface;
use Illuminate\Http\Request;

class TemplateController extends Controller
{
    protected $service;

    public function __construct(TemplateServiceInterface $service)
    {
        $this->service = $service;
    }

    public function index(Request $request)
    {
        $templates = $this->service->list($request);
        return new TemplateCollection($templates);
    }

    public function store(Request $request)
    {
        //
    }

    public function show($uuid)
    {
        $template = $this->service->find($uuid);
        return new TemplateResource($template);
    }

    public function update(Request $request, $uuid)
    {
        //
    }

    public function destroy($uuid)
    {
        //
    }
}
