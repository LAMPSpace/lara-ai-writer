<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class DocumentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'uuid' => $this->uuid,
            'name' => $this->name,
            'result' => $this->result,
            'words' => $this->words,
            'favorite' => $this->favorite,
            'template_uuid' => $this->template_uuid,
            'template' => $this->template_name,
            'icon' => $this->icon,
            'color' => $this->color,
            'created_at' => $this->created_at
        ];
    }
}
