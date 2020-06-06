<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use App\Http\Resources\UserResource;
class UserController extends Controller
{
    public function index(){
        return UserResource::collection(
            User::where('is_admin',false)->where('is_chef',false)->get()
        );
    }
    public function show($user){
        return new UserResource(
            User::find($user)
        );
    }
}
