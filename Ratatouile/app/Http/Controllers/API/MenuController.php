<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\MenuRecipes;
use App\Http\Resources\MenuResource;

class MenuController extends Controller
{
    public function index($chefId){
        return  MenuResource::collection(
            MenuRecipes::where('chef_id',$chefId)->get()
        );
    }
    public function store(){
        $request = request();
        if($request->hasFile('image'))
        {
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension(); // getting image extension
            $filename =time().'.'.$extension;
            $path = $request->file('image')->storeAs( 'menu',$filename,'public' );//$request->user()->id
        }
        $menu = MenuRecipes::create([
            'name'=>$request->name,
            'description'=>$request->description,
            'image'=>$path,
            'price'=>$request->price,
            'chef_id'=>$request->chef_id,
        ]);
        return new MenuResource($menu);
    }
    public function update($id){
        $request = request();
        if($request->hasFile('image'))
        {
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension(); // getting image extension
            $filename =time().'.'.$extension;
            $path = $request->file('image')->storeAs( 'menu',$filename,'public' );//$request->user()->id
        }
        $menu = MenuRecipes::find($id);
        $menu->name=$request->name;
        $menu->description=$request->description;
        $menu->image=$path;
        $menu->price=$request->price;
        $menu->save();
        
        return new MenuResource($menu);
    }
    public function show($id){
        return new MenuResource(
            MenuRecipes::find($id)
        );
    }
    public function destroy($menuId)
    {
        $request = request();
        $menuId = $request->menu;
        MenuRecipes::find($menuId)->delete();
    }
}
