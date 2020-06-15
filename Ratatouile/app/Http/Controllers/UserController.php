<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class UserController extends Controller
{
    public function userIndex(){

        $users = User::where('is_chef',false)->get();
        return view('users.index',[
            'users'=>$users,
        ]);
    }
    // public function chefIndex(){
        
    //     $chefs = User::where('is_chef',true)->get();
    //     return view('chefs.index',[
    //         'chefs'=>$chefs,
    //     ]);
    // }
    public function userEdit(){
        // $users = User::where('is_chef',false)->get();
        $request = request();
        $userId = $request->user;
        $user = User::find($userId);
        return view('users.edit',[
            'user'=>$user,
        ]);
    }
    // public function chefEdit(){
    //     // $users = User::where('is_chef',false)->get();
    //     $request = request();
    //     $chefId = $request->chef;
    //     // dd($chefId);
    //     $chef = User::find($chefId);
    //     return view('chefs.edit',[
    //         'chef'=>$chef,
    //     ]);
    // }
    public function userUpdate(){
        $request = request();
        $userId = $request->user;
        $user = User::find($userId);
        $user->name = $request->name;
        $user->email = $request->email;
        $user->image = $request->file('image');
        $user->is_banned = $request->is_banned;
        $user->is_chef = $request->is_chef;
        if($request->hasfile('image')){
            $file=$request->file('image');
            $extention=$file->getClientOriginalExtension();
            $filename=time() . '.' . $extention;
            // $file->move('uploads/user/', $filename);

            $path = $request->file('image')->storeAs( 'user',$filename,'public' );
            $user->image = $filename;
            
        }
        $user->save();
        if($user->is_chef == true){
            return redirect()->route('chefs.index');
        }
        return redirect()->route('users.index');
    }
    // public function chefUpdate(){
    //     $request = request();
    //     $chefId = $request->chef;
    //     $chef = User::find($chefId);
    //     $chef->name = $request->name;
    //     $chef->email = $request->email;
    //     $chef->image = $request->file('image');
    //     $chef->is_banned = $request->is_banned;
    //     $chef->is_chef = $request->is_chef;
    //     $chef->work_place = $request->work_place;
    //     if($request->hasfile('image')){
    //         $file=$request->file('image');
    //         $extention=$file->getClientOriginalExtension();
    //         $filename=time() . '.' . $extention;
    //         $file->move('uploads/chef/', $filename);
    //         $chef->image = $filename;
    //     }
    //     $chef->save();
    //     if($chef->is_chef == false){
    //         return redirect()->route('users.index');
    //     }
    //     return redirect()->route('chefs.index');
    // }
    public function userDestroy($id){
        $user = User::find($id);
        $user -> delete();
        return redirect()->route('users.index');
    }
    // public function chefDestroy($id){
    //     $user = User::find($id);
    //     $user -> delete();
    //     return redirect()->route('chefs.index');
    // }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
            'device_name' => 'required'
        ]);
    
        $user = User::where('email', $request->email)->first();
    
        if (! $user || ! Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }
    
        return $user->createToken($request->device_name)->plainTextToken;
    }


    public function register(Request $request)
    {
        if($request->hasFile('image'))
        {
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension(); // getting image extension
            $filename =time().'.'.$extension;
            // storeas('chef',,public)
            // $path=Storage::disk('public')->put('uploads/chef/'.$filename, File::get($file));
            // $file->move('uploads/chef/', $filename);
            // $chef->image = $filename;
            $path = $request->file('image')->storeAs( 'chef',$filename,'public' );//$request->user()->id
        }
        else {
            $filename = 'chef.jpg';
        }
        $request->validate([
            'name'    => 'required',
            'email'   => 'required',
            'password'=> 'required|confirmed',
        ]);

        User::create([
            'name'     => request('name'),
            'email'    => request('email'),
            'password' => Hash::make(request('password')),
            'image'    =>  $path,
            'is_chef'  => request('is_chef'),
        ]);

        return $this->login(request());
    }

    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    public function me()
    {
        return response()->json(auth()->user());
    }


}
