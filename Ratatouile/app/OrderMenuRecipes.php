<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OrderMenuRecipes extends Model
{
    //
    protected $fillable=[
        'order_id',
        'menu_recipe_id',
    ];

}
