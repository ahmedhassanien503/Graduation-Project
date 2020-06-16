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
            'id'=> $this->id,
            'description' =>  $this->description,
            'payment_method' =>  $this->payment_method,
            'date' =>  $this->date,
            'address' =>  $this->address,
            'total_price' =>  $this->total_price,
            'chef_name'=> new ChefResource($this->chef),
            'user_name'=> new UserResource($this->user),
        ];
    }
}
