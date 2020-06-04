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
        <th scope="col" colspan="2">actions</th>
        </tr>
    </thead>
    <tbody>
    @foreach($users as $user)
        <tr>
        <th scope="row">{{$user->id}}</th>
        <td>{{$user->name}}</td>
        <td>{{$user->email}}</td>
        <td><img src="{{asset('uploads/chefs/' . $user->image)}}"></td>
        <td>{{$user->is_banned}}</td>
        <td>{{$user->is_chef}}</td>
        <td>
        <a href="{{route('users.edit',['user' => $user->id])}}" class="btn btn-primary">Edit</a>
        </td>
        <td>
            <form method="POST" action="{{route('users.destroy',['user'=>$user->id])}}">
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