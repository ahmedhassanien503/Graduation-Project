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
        'image',
        'chef_id',  
    ];
    public function chef()
    {
        return $this->belongsTo('App\User','chef_id');
    }


    public function users()
    {
        return $this->belongsToMany('App\User');
    }

   


}
