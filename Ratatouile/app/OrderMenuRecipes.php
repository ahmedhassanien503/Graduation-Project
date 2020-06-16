<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OrderMenuRecipes extends Model
{
    protected $fillable = [
        'order_id','menu_recipe_id'
        
    ];
    public function order()
    {
        return $this->belongsTo('App\Order');
    }

    public function MenuRecipes()
    {
        return $this->belongsTo('App\MenuRecipes');
    }
}
