<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\User;

class ChefController extends Controller
{
    public function chefIndex(){
        
        $chefs = User::where('is_chef',true)->get();
        return view('chefs.index',[
            'chefs'=>$chefs,
        ]);
    }
    public function chefEdit(){
        // $users = User::where('is_chef',false)->get();
        $request = request();
        $chefId = $request->chef;
        // dd($chefId);
        $chef = User::find($chefId);
        return view('chefs.edit',[
            'chef'=>$chef,
        ]);
    }
    public function chefUpdate(){
        $request = request();
        $chefId = $request->chef;
        $chef = User::find($chefId);
        $chef->name = $request->name;
        $chef->email = $request->email;
        $chef->image = $request->file('image');
        $chef->is_banned = $request->is_banned;
        $chef->is_chef = $request->is_chef;
        $chef->work_place = $request->work_place;
        if($request->hasfile('image')){
            $file=$request->file('image');
            $extention=$file->getClientOriginalExtension();
            $filename=time() . '.' . $extention;
            $file->move('uploads/chef/', $filename);
            $chef->image = $filename;
        }
        $chef->save();
        if($chef->is_chef == false){
            return redirect()->route('users.index');
        }
        return redirect()->route('chefs.index');
    }
    public function chefDestroy($id){
        $user = User::find($id);
        $user -> delete();
        return redirect()->route('chefs.index');
    }
}
