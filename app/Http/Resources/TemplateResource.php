<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TemplateResource extends JsonResource
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
            'category' => $this->category,
            'color' => $this->color,
            'name' => $this->name,
            'icon' => $this->icon,
            'route' => $this->route,
            'description' => $this->description,
            'prompt' => $this->prompt,
            'views' => $this->views
        ];
    }
}
