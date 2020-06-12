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
        'description' =>'required',
        'payment_method' => 'required',
        'address' => 'required',
        'total_price' => 'required',
        // 'chef_id' => 'required',
        // 'user_id' => 'required',
    ]);

    $order= Order::create([
        'description' => $request->description,
        'payment_method' => $request->payment_method,
        'address' => $request->address,
        'total_price' =>  $request->total_price,
        'date'=>$request->date,
        'user_id' =>  "1",
        'chef_id' => "1",
    ]);
    // return response()->json($orders,201);

     return new OrderResource($order);
}



public function update(Request $request)
{
     $request->validate([
        'description' =>'required',
        'payment_method' => 'required',
        'address' => 'required',
        'total_price' => 'required',
    ]); 

    $orderId=$request->order;
    $orderData=Order::find($orderId);
    $orderData->description = $request->description;
    $orderData->payment_method = $request->payment_method;
    $orderData->address = $request->address;
    $orderData->date = $request->date;
    $orderData->total_price =  $request->total_price;
    $orderData->chef_id = "1";
    $orderData->user_id = "1";
    $orderData->save();
    return new OrderResource($orderData);
}

public function destroy()
{
    $request = request();
    $orderId = $request->orderId;
    Order::find($orderId)->delete();
    // return redirect()->route('orders');
}

}
