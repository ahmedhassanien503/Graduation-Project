<?php

namespace App;
use App\User;


use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'description',
        'payment_method',
        'date',
        'address',
        'total_price',
        'user_id',
        'chef_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function chef()
    {
        return $this->belongsTo(User::class);
    }
}
