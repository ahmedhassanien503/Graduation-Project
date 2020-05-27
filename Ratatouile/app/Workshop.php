<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Workshop extends Model
{

    protected $fillable = [
        'name',
        'description', 
        'app_deadline',
        'no_of_applicant',
        
    ];
    public function user()
    {
        return $this->belongsTo('App\User');
    }


    public function users()
    {
        return $this->belongsToMany('App\User');
    }

   


}
