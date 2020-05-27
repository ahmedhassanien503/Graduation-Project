<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Order;

class MenuRecipes extends Model
{
    protected $fillable=[
        'chef_id',
        'name',
        'description',
        'image',
        'price',
    ];

    /**
     * The orders that belong to the chef.
    */
    public function orders()
    {
        return $this->belongsToMany('App\Order','order_menu_recipes');
    }
}
