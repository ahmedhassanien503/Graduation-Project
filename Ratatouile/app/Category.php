<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable=[
        'created_at',
        'updated_at',
        'CategoryName'
    ];

    public function recipes()
    {
        return $this->belongsToMany('App\Recipe', 'category_recipes');
    }
}
