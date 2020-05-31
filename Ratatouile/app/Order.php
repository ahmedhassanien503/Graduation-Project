<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\MenuRecipes;
use App\User;

class Order extends Model
{
    protected $fillable=[
        'date',
        'address',
        'user_id',
        'chef_id',
        'total_price',
    ];

    /**
        * The user that request  the order.
    */
    public function users()
    {
        return $this->belongsTo('App\User');
    }

    /**
    * The chef that request  the order.
    */
    public function chefs()
    {
        return $this->belongsTo('App\Chef');
    }

    /**
        * The recipes that belong to the order.
    */
    public function menuRecipes()
    {
        return $this->belongsToMany('App\MenuRecipes','order_menu_recipes');
    }
}
