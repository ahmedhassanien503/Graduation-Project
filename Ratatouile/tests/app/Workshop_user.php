<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Workshop_user extends Model
{
    protected $fillable = [
        'user_id',
        'workshop_id', 
        
        
    ];

    public function workshop()
    {
        return $this->belongsTo('App\Workshop','workshop_id');
    }
}
