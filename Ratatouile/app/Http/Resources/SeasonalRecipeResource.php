<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SeasonalRecipeResource extends JsonResource
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
            'season_id'=> $this->season_id,
            'recipe_id'=> $this->recipe_id,
            'recipe_info'=> new ResipeResource($this->recipe),

        ];
    }
}
