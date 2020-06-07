<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SeasonRecipe extends Model
{
    protected $primaryKey = 'id';

    protected $fillable = [
        'season_id',
        'recipe_id',
    ];

    public function Recipe()
    {
        return $this->belongsto('App\Recipe');
    }

    public function season()
    {
        return $this->belongsto('App\Season');
    }

}
