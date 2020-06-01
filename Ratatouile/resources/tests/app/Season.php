<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Season extends Model
{

    protected $fillable=['SeasonName'];

    public function Recipes()
    {
        return $this->belongsToMany('App\Recipe', 'season_recipes');
    }
}
