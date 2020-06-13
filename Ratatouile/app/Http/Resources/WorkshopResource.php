<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class WorkshopResource extends JsonResource
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
            'workshop_name'=> $this->name,
            'workshop_description'=> $this->description,
            'app_deadline'=> $this->app_deadline,
            'no_of_applicant'=> $this->no_of_applicant,
            'chef_name'=> new ChefResource($this->user),
            'image'=> $this->image,
        ];
    }
}
