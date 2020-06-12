<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    protected $fillable = [
        'question',
        'user_id',
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function answer()
    {
        return $this->belongsTo(Answer::class);
    }
}
