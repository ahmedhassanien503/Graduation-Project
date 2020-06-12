<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class QuestionResource extends JsonResource
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
            'question'=> $this->question,
            'created_at'=> $this->created_at->diffForHumans(),
            //hours ago
            // 'created_at'=> $this->created_at->format('d/m/y H:i'),
            //date
            'user_id'=>$this->user_id,
            'user_info'=> new UserResource($this->user),
        ];
    }
}
