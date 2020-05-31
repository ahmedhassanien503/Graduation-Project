<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{

    protected $fillable = [
        'answer',
        'chef_id',
        'question_id',  
    ];
    public function chef()
    {
        return $this->belongsTo('App\Chef');
    }

    public function question()
    {
        return $this->belongsTo('App\Question');
    }
}
