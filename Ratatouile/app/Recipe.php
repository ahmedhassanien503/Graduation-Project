<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    protected $primaryKey = 'id';
    
    protected $fillable = [
        'created_at',
        'updated_at',
        'RecipeName',
        'details', 
        'recipe_image',
        'Serving',
        'TakenTime',
        'user_id',
      
        
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
        return $this->belongsTo('App\User');
    }

    // public function chef()
    // {
    //     return $this->belongsTo('App\Chef', 'chef_id');
    // }

}
