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
              <h3 class="card-title">Add New Season</h3>
            </div>
            <!-- /.card-header -->
            <!-- form start -->
            <form method="POST" action="{{route('seasons.store')}}" enctype="multipart/form-data">
                @csrf
                <div class="card-body">
                <div class="form-group">
                  <dt style="color:#FF337D"> "Wishing we could put up some of happiness in jars and open a jar of it every season" </dt>
                  
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Season Name</label>
                  <input type="text" name="name" class="form-control" id="exampleInputPassword1" placeholder="New Season">
                </div>
              
              </div>
              <!-- /.card-body -->
              <div class="card-footer">
                <button type="submit" class="btn btn-primary"> Save </button>
              </div>
            </form>
          </div>
          <!-- /.card -->
          </div>
@endsection