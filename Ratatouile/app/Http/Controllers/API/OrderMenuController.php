<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\OrderMenuRecipes;
use App\MenuRecipes;
use App\Http\Resources\MenuResource;
use App\Http\Resources\OrderMenuResource;
use Illuminate\Support\Facades\DB;
class OrderMenuController extends Controller
{
    public function index($order_id){
        $menuId = OrderMenuRecipes::where('order_id',$order_id)->value('menu_recipe_id');
        
        return  MenuResource::collection(
            MenuRecipes::where('id',$menuId)->get()
        );
    }
    public function store(){
        $request = request();
        $order_id=DB::table('orders')->max('id');
        $menuOrdered = OrderMenuRecipes::create([
            'menu_recipe_id'=>$request->menu_recipe_id,
            'order_id'=>$order_id,
        ]);
        return new OrderMenuResource($menuOrdered);
    }
}
