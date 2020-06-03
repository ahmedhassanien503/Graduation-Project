@extends('layouts.admin')
@section('content')
<div class="container">
    <table class="table table-bordered table-hover table-dark" class="mx-auto" style="background-color: 	rgb(52, 57, 64)" >
    <thead class="thead-light">
        <tr>
        <th scope="col">#</th>
        <th scope="col">name</th>
        <th scope="col">email</th>
        <th scope="col">image</th>
        
        <th scope="col">is_banned</th>
        <th scope="col">is_chef</th>
        <th scope="col">work_place</th>
        <th scope="col" colspan="2">actions</th>
        </tr>
    </thead>
    <tbody>
    @foreach($chefs as $chef)
        <tr>
        <th scope="row">{{$chef->id}}</th>
        <td>{{$chef->name}}</td>
        <td>{{$chef->email}}</td>
        <td><img src=" {{$chef->image}}"></td>
        <td>{{$chef->is_banned}}</td>
        <td>{{$chef->is_chef}}</td>
        <td>{{$chef->work_place}}</td>
        <td>
        <a href="{{route('chefs.edit',['chef' => $chef->id])}}" class="btn btn-primary">Edit</a>
        </td>
        <td>
            <form method="POST" action="{{route('chefs.destroy',['chef'=>$chef->id])}}">
                @csrf
                @method('DELETE')
                <button class="btn btn-primary" type="submit" on_click="confirm('are you sure you want to delete this post?')">Delete</button>
            </form>
        </td>
        </tr>
        @endforeach
    </tbody>
    </table>
</div>
@endsection