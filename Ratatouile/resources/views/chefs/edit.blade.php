@extends('layouts.admin')
@section('content')

<div class="container">
        <form method="POST" action="{{route('chefs.update',['chef' => $chef->id])}}" enctype="multipart/form-data"> 
        @method('PUT')
        @csrf
        <div class="form-group">
            <label>Name</label>
            <input name="name" value="{{$chef->name}}" type="text" class="form-control" >
        </div>
        <div class="form-group">
            <label>Email</label>
            <input name="email" value="{{$chef->email}}" type="text" class="form-control" >
        </div>
        <div class="form-group">
        
            <label for="exampleFormControlFile1">Image</label>
            <input type="file" class="form-control-file" id="image">
  
        </div>
        <div class="form-group">
            <label>work_place</label>
            <input name="work_place" value="{{$chef->work_place}}" type="text" class="form-control" >
        </div>
        
        <div class="form-group">
            <label>is_banned</label>
            <input name="is_banned" value="{{$chef->is_banned}}" type="text" class="form-control" >
        </div>
        <button type="submit" class="btn btn-primary">Update</button>
        </form>
    </div>

@endsection