@extends('layouts.admin')
@section('content')


<div class="container " style="text-align:center">
<br>
<br>
<section class="content">
    <div class="container-fluid">
      <div class="row">
        <!-- left column -->
        <div class="col-md-12">
          <!-- jquery validation -->
          <div class="card card-primary">
            <div class="card-header">
              <h3 class="card-title">Edit Season</h3>
            </div>
            <!-- /.card-header -->
            <!-- form start -->
            <form method="POST" action="{{route('seasons.update',['season' => $season->id])}}" enctype="multipart/form-data">
                @method('PUT')
                @csrf
                <div class="card-body">
                <div class="form-group">
                  
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Season Name</label>
                  <input type="text" name="name" class="form-control" id="exampleInputPassword1" value="{{$season->SeasonName}}">
                </div>
              
              </div>
              <!-- /.card-body -->
              <div class="card-footer">
                <button type="submit" class="btn btn-primary">  Update </button>
              </div>
            </form>
          </div>
          <!-- /.card -->
          </div>
@endsection