<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $fillable=[
        'created_at',
        'updated_at',
        'name',
        'email',
        'message',
    ];
}
