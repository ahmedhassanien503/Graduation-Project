<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class WorkshopUserResource extends JsonResource
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
            'workshop_name'=> new WorkshopResource($this->workshop),
            'user_name'=> new UserResource($this->user),
            'is_accepted'=>$this->is_accepted,
        ];
    }
}
