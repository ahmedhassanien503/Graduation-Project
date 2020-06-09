<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
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
            'date' =>  $this->date,
            'address' =>  $this->address,
            'total_price' =>  $this->total_price,
            'chef_id' =>  $this->chef_id,
            'user_id' =>  $this->user_id,
        ];
    }
}
