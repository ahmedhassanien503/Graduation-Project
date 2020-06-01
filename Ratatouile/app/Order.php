<?php

namespace App;
use App\User;
use App\Chef;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'date',
        'address',
        'total_price',
        'user_id',
        'chef_id',
    ];

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function chef()
    {
        return $this->belongsTo('App\Chef');
    }
}
