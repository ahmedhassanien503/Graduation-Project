<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable=[
        'created_at',
        'updated_at',
        'category_name',
        'image',
    ];

    public function recipes()
    {
        return $this->belongsToMany('App\Recipe', 'category_recipes');
    }
}
