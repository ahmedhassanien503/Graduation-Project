<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MenuRecipes extends Model
{
    protected $fillable = [
        'name','description','image','price','chef_id'
        
    ];
    public function chef()
    {
        return $this->belongsTo('App\User');
    }

}
