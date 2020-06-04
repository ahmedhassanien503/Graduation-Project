@extends('layouts.admin')
@section('content')

<div class="container">
        <form method="POST" action="{{route('users.update',['user' => $user->id])}}" enctype="multipart/form-data"> 
        @method('PUT')
        @csrf
        <div class="form-group">
            <label>Name</label>
            <input name="name" value="{{$user->name}}" type="text" class="form-control" >
        </div>
        <div class="form-group">
            <label>Email</label>
            <input name="email" value="{{$user->email}}" type="text" class="form-control" >
        </div>
        <div class="form-group">
        
            <label for="exampleFormControlFile1">Image</label>
            <input type="file" name ='image'  class="form-control-file" id="image" value="{{$user->image}}">
  
        </div>
        <div class="form-group">
            <label>is_banned</label>
            <input name="is_banned" value="{{$user->is_banned}}" type="text" class="form-control" >
        </div>
        <div class="form-group">
            <label>is_chef</label>
            <input name="is_chef" value="{{$user->is_chef}}" type="text" class="form-control" >
        </div>

        <div class="form-group">
            <label>work_place</label>
            <input name="work_place" value="{{$user->work_place}}" type="text" class="form-control" >
        </div>
        <button type="submit" class="btn btn-primary">Update</button>
        </form>
    </div>

@endsection