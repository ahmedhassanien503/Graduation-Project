@extends('layouts.admin')
@section('content')

<div class="d-flex align-content-stretch flex-wrap" style="text-align:center">
    <div class="container " style="text-align:center">
        <br>
      
  <a href="{{route('orders.create')}}"  class="btn btn-success mb-5" style="align-center" >New Order<i class="far fa-plus-square"></i> </a></div>
      <table class="table table-bordered table-hover table-dark" class="mx-auto" style="background-color: 	rgb(52, 57, 64)" id="doctor_table">
        <thead class="thead-light">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Order Address</th>
              <th scope="col">Order Date</th>
              <th scope="col">Total Price</th>
              <th scope="col">Chef Name</th>
              <th scope="col">User Name</th>
              <th scope="col" colspan="4">Actions</th>
              
            
            </tr>
          </thead>
          <tbody>
            @foreach($orders as $order)
            <tr>
                
            <th scope="row">{{ $order->id }}</th>
              <td>{{ $order->address }} </td>
              <td>{{ $order->date }} </td>
              <td>{{$order->total_price }}</td>
              <td>{{ $order->chef->name}}</td>
              <td>{{ $order->user->name}} </td>
              <td>{{ $order->created_at}} </td>
         
              <td><a href="{{route('orders.show',['order' => $order->id])}}" class="btn btn-outline-primary btn-sm" >  <i class="fas fa-folder">
            </i> View</a></td>
              <td><a href="{{route('orders.edit',['order' => $order->id])}}" class="btn btn-outline-info btn-sm" > <i class="fas fa-pencil-alt">
            </i> Edit</a></td>
            <td> 
                <form method="POST" action="{{route('orders.destroy',['order' => $order->id])}}" >
                    @method('DELETE')
                    @csrf
                    <button type="submit" class="btn btn-outline-danger btn-sm" onclick="return confirm('Are you sure you want to delete this order?')"><i class="fas fa-trash-alt">
                    </i> Delete</button>
                </form>
            </td>
            
            </tr>
          @endforeach
          </tbody>
        </table> 
       
  </div>

  @endsection