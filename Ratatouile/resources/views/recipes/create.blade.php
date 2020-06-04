@extends('layouts.admin')
@section('content')

@if ($errors->any())
{{--  to display error messages --}}
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif

<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    
    <section class="content-header ">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Add New Recipe</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">New Recipe</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <section class="content h-100 ">
      <div class="row">
        <div class="col-md-6 ">
          <div class="card card-primary">
            <div class="card-header">
              <h3 class="card-title">Welcome Chef</h3>

              <div class="card-tools">
                <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                  <i class="fas fa-minus"></i></button>
              </div>
            </div>
            <div class="card-body">
                <form method="POST" action="{{route('recipes.store')}}" enctype="multipart/form-data">
                    @csrf

              <div class="form-group">
                <label for="inputName">Created at</label>
                <input type="date" name="created_at"  class="form-control" placeholder="example: 1-1-2020">
              </div>
             
              <div class="form-group">
                <label for="inputName">Recipe Name</label>
                <input type="text" name="RecipeName" class="form-control">
              </div>
              <div class="form-group">
                <label for="inputName">Details</label>
                <textarea type="text" id="inputName" name="details" class="form-control"></textarea>
              </div>
            
              <div class="form-group">
                <div class="form-group col-md-12">
                  <label for="avatar">Image</label>
                  <input type="file" class="d-block" id="image" name="image" accept="image/*">
                </div>
              </div>
              
              <div class="form-group">
                <label for="inputName">Serving</label>
                <input type="text"  name="Serving" class="form-control">
              </div>

              <div class="form-group">
                <label for="inputClientCompany">Taken Time</label>
                <input type="text" name="TakenTime"  class="form-control">
              </div>
              <div class="form-group">
                <label for="inputProjectLeader">User Name</label>
                <input type="text"   name= "user_id"class="form-control">
              </div>


        <div class="row ">
        <div class="col-12">
          <a href="#" class="btn btn-outline-warning">Cancel</a>
          <input type="submit" value="Add Recipe" class="btn btn-outline-primary float-right">
        </form>
        </div>
      </div>
    </section>

    <!-- /.content -->
  </div>
  
    
  <!-- /.content-wrapper -->

  <footer class="main-footer">
    <div class="float-right d-none d-sm-block">
      <b>Version</b> 1.0.0
    </div>
    <strong>Copyright &copy;2020 <a href="#">Ratatouile</a>.</strong> All rights
    reserved.
  </footer>

  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
  </aside>

@endsection