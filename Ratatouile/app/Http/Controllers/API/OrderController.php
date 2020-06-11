<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\OrderResource;
use App\Order;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
    */
    public function index()
    {
        return OrderResource::collection(
            Order::all()
            // Order::paginate(4)
        ); 
    }

    public function show($order){
        return  Order::find($order)
            ?new OrderResource(
                Order::find($order)
            ) : 'does not exist';
    }

    public function store(Request $request)
    {
        $this->validate($request, [
        
        'address' => 'required',
        'total_price' => 'integer',
        'chef_id' => 'required',
        'user_id' => 'required',
    ]);
        $order = Order::create($request->all());
 
        return response()->json($order, 201);
    }

}
