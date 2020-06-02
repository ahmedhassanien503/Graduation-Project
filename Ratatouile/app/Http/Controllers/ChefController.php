<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Chef;

class ChefController extends Controller
{
    public function index(){
        $chefs = Chef::all();
        return view('chefs.index',[
            'chefs' => $chefs,
        ]);
    }
    public function edit(){
        $request = request();
        $chefId = $request->chef;
        $chef = Chef::find($chefId);
        return view('chefs.edit',[
            'chef'=>$chef,
        ]);
    }
    public function update(){
        $request = request();
        $chefId = $request->chef;
        $chef = Chef::find($chefId);
        $chef->name = $request->name;
        $chef->email = $request->email;
        $chef->image = $request->file('image');
        $chef->is_banned = $request->is_banned;
        $chef->work_place = $request->work_place;
        $chef->save();
        return redirect()->route('chefs.index');
    }
    public function destroy($id){
        $chef = Chef::find($id);
        $chef -> delete();
        return redirect()->route('chefs.index');
    }
}
