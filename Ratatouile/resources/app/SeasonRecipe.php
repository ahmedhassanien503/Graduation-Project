<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SeasonRecipe extends Model
{
    protected $fillable = [
        'season_id',
        'recipe_id',
    ];
}
