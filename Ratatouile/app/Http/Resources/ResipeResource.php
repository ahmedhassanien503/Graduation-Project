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
            'title'=>$this->title,
            'details'=>$this->details,
            'recipe_image'=>$this->recipe_image,
            'Serving'=>$this->Serving,
            'TakenTime'=>$this->TakenTime,
            // 'user_id'=>$this->user_id,
            // 'is_chef'=>$this->is_chef,
            // 'image'=>$this->image,
            // 'name'=>$this->name,
            // 'user_info'=>new UserResource($this->user), 
           'user'=>[
               'id'=>$this->user? $this->user->id:'not exist',
               'name'=>$this->user? $this->user->name:'not exist',
               'image'=>$this->user? $this->user->image: 'not exist',
               'is_chef'=>$this->user? $this->user->is_chef: 'not exist',
            //    'id'=>$this->user? $this->user->id:'not exist',

           ]
        ];
    }
}
