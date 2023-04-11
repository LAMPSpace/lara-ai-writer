<?php

namespace App\Http\Controllers;

use App\Http\Resources\TemplateCollection;
use App\Http\Resources\TemplateResource;
use App\Services\TemplateService;
use Illuminate\Http\Request;

class TemplateController extends Controller
{
    protected $service;

    public function __construct(TemplateService $service)
    {
        $this->service = $service;
    }

    public function index()
    {
        $templates = $this->service->all();
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
