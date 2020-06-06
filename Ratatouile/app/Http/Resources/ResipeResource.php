<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ResipeResource extends JsonResource
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
            'id'=>$this->id,
            'created_at'=>$this->created_at,
            'updated_at'=>$this->updated_at,
            'RecipeName'=>$this->RecipeName,
            'details'=>$this->details,
            'image'=>$this->image,
            'Serving'=>$this->Serving,
            'TakenTime'=>$this->TakenTime,
            'user_id'=>$this->user_id,
            'user_info'=>[
                'name'=>$this->user ? $this->user->name:'not exist',
                'email'=>$this->user ? $this->user->email:'not exist',
                'image'=>$this->user ? $this->user->image:'not exist',
                'is_chef'=>$this->user ? $this->user->is_chef:'not exist',
            ]
        ];
    }
}
