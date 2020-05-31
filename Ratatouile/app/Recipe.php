<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    protected $fillable = [
        'RecipeName',
        'details', 
        'image',
        'Serving',
        'TakenTime',
        
    ];

    public function categories()
    {
        return $this->belongsToMany('App\Category', 'category_recipes');
    }

    public function seasons()
    {
        return $this->belongsToMany('App\Season', 'season_recipes');
    }

    public function user()
    {
        return $this->belongsTo('App\User', 'user_id');
    }

    public function chef()
    {
        return $this->belongsTo('App\Chefs', 'chef_id');
    }

}
