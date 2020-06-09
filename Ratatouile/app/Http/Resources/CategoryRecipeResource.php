<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CategoryRecipeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'=> $this->id,
            'category_id'=> $this->category_id,
            'recipe_id'=> $this->recipe_id,
            'recipe_info'=> new ResipeResource($this->recipe),

        ];
    }
}
