<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class WorkshopUser extends Model
{
    protected $fillable = [
        'user_id',
        'workshop_id', 
        'is_accepted',
        
        
    ];

    public function workshop()
    {
        return $this->belongsTo('App\Workshop','workshop_id');
    }

    public function user()
    {
        return $this->belongsTo('App\User','user_id');
    }
}
