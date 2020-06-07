<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Season extends Model
{
    protected $primaryKey = 'id';

    protected $fillable=[
        'season_name',
        'image',
];

    public function Recipes()
    {
        return $this->belongsToMany('App\Recipe', 'season_recipes');
    }
}
