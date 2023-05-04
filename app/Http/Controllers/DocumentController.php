<?php

namespace App\Http\Controllers;

use App\Http\Resources\DocumentCollection;
use App\Services\DocumentService;
use Illuminate\Http\Request;

class DocumentController extends Controller
{
    protected $service;

    public function __construct(DocumentService $service)
    {
        $this->service = $service;
    }

    public function index()
    {
        $documents = $this->service->all();
        return new DocumentCollection($documents);
    }

    public function store(Request $request)
    {
        //
    }

    public function show($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}
