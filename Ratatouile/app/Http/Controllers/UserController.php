<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\User;
class UserController extends Controller
{
    public function index(){
        $users = User::all();
        
        return view('users.index',[
            'users' => $users,
        ]);
    }
    public function edit(){
        $request = request();
        $userId = $request->user;
        $user = User::find($userId);
        return view('users.edit',[
            'user'=>$user,
        ]);
    }
    public function update(){
        $request = request();
        $userId = $request->user;
        $user = User::find($userId);
        // dd($userId);
        $user->name = $request->name;
        $user->email = $request->email;
        $user->image = $request->file('image');
        $user->is_banned = $request->is_banned;
        $user->save();
        // $user->password =>$request->password;
        
        return redirect()->route('users.index');
    }
    public function destroy($id){
        $user = User::find($id);
        $user -> delete();
        return redirect()->route('users.index');
    }
}
