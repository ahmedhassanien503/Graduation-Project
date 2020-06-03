<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Order;

class OrderController extends Controller
{
    public function index()
    {
        $orders = Order::all();
        return view('orders.index',[
            'orders' => $orders,
        ]);
    }

    public function create(){
        $users= User::where([ ['is_chef','==',false],['is_admin','==',false] ])->get();
        $chefs = User::where('is_chef','!=',false)->get();
        $action =route('orders.store');
        return view('orders.create',[
            'action'=> $action,
            'chefs'=>$chefs,
            'users'=>$users,
        ]);
    }
   
    

    public function store(Request $request){
    
         Order::create([
            'date' =>  $request->date,
            'address' =>  $request->address,
            'total_price' =>  $request->total_price,
            'chef_id' =>  $request->chef_id,
            'user_id' =>  $request->user_id,
        ]);
        return redirect()->route('orders.index');
    }

    public function show(){

        $request=request();
        $orderId=$request->order;
        $order = Order::find($orderId);

        return view('orders.show',[
            'order'=>$order,
        ]);
    }


    public function destroy(){
        $request=request();
        $orderId=$request->order;
        $deleted = Order::find($orderId)->delete();
        return redirect()->route('orders.index');
    }

    public function edit(){

        $request=request();
        $users= User::where([ ['is_chef','==',false],['is_admin','==',false] ])->get();
        $chefs = User::where('is_chef','!=',false)->get();
        $orderId=$request->order;
        $order = Order::find($orderId);
        $action =route('orders.update',['order'=>$orderId]);

        return view('orders.edit',[
            'order'=> $order,
            'chefs'=>$chefs,
            'users'=>$users,
            'action'=> $action,

        ]);
    }
    
    public function update(Request $request){

        $request=request();
        $orderId=$request->order;
        $order= Order::find($orderId);
        $order->date = $request->date;
        $order->address = $request->address;
        $order->total_price =  $request->total_price;
        $order->chef_id =$request->chef_id;
        $order->user_id = $request->user_id;

        $order->save();
        return redirect()->route('orders.index');
    }
}
