<?php

namespace App\Http\Controllers;

use App\Http\Resources\DocumentCollection;
use App\Interfaces\Service\DocumentServiceInterface;
use Illuminate\Http\Request;

class DocumentController extends Controller
{
    protected $service;

    public function __construct(DocumentServiceInterface $service)
    {
        $this->service = $service;
    }

    public function index(Request $request)
    {
        $documents = $this->service->list($request);
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
