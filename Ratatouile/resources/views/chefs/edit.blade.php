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
            <label>is_banned</label>
            <input name="is_banned" value="{{$chef->is_banned}}" type="text" class="form-control" >
        </div>
        <div class="form-group">
            <label>is_chef</label>
            <input name="is_chef" value="{{$chef->is_chef}}" type="text" class="form-control" >
        </div>
        <!-- <label class="switch">
        is_chef
            <input type="checkbox" name="is_chef" value="{{$chef->is_chef}}" checked data-toggle="toggle">
            <span class="slider round"></span>
        </label> -->

        <!-- <input data-id="{{$chef->id}}" name="is_chef" value="{{$chef->is_chef}}"  class="toggle-class" type="checkbox" data-onstyle="success" data-offstyle="danger" data-toggle="toggle" data-on="Active" data-off="InActive" {{ $chef->is_chef ? 'checked' : '' }}> -->

        <div class="form-group">
            <label>work_place</label>
            <input name="work_place" value="{{$chef->work_place}}" type="text" class="form-control" >
        </div>
        <button type="submit" class="btn btn-primary">Update</button>
        </form>
    </div>

    <script>let elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));

        elems.forEach(function(html) {
            let switchery = new Switchery(html,  { size: 'small' });
        });</script>

    <script>
        $(function() {
            $('.toggle-class').change(function() {
                var is_chef = $(this).prop('checked') == true ? 1 : 0; 
                var chef_id = $(this).data('id'); 
                
                $.ajax({
                    type: "GET",
                    dataType: "json",
                    url: '/changeStatus',
                    data: {'is_chef': is_chef, 'chef_id': chef_id},
                    success: function(data){
                    console.log(data.success)
                    }
                });
            })
        })
    </script>
@endsection