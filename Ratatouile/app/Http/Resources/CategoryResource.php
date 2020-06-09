<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
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
            'category_name'=> $this->category_name,
            'image'=> $this->image,
            'created_at'=>$this->created_at,
        ];
    }
}
