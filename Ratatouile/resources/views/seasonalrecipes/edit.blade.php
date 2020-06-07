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
              <h3 class="card-title">Edit Seasonal Recipe</h3>
            </div>
            <!-- /.card-header -->
            <!-- form start -->
            <form method="POST" action="{{route('seasonalrecipes.update',['seasonalrecipe' => $seasonalrecipe->id])}}" enctype="multipart/form-data">
                @method('PUT')
                @csrf
                <div class="card-body">
                <div class="form-group">
                  
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Season Name</label>
                  <select name="season_id" class="form-control custom-select">
                    <option selected disabled>Select Season</option>
                    @foreach($seasons as $season)
                    <option value="{{$season->id}}">{{$season->season_name}}</option>
                    @endforeach
                  </select>
                </div>

                <div class="form-group">
                  <div class="form-group">
                    <select name="recipe_id" class="form-control custom-select">
                        <option selected disabled>Select Recipe</option>
                        @foreach($recipes as $recipe)
                        <option value="{{$recipe->id}}">{{$recipe->RecipeName}}</option>
                        @endforeach
                      </select>
                  </div>
                </div>   
              
              </div>
              <!-- /.card-body -->
              <div class="card-footer">
                <button type="submit" class="btn btn-primary"> Update </button>
              </div>
            </form>
          </div>
          <!-- /.card -->
          </div>
@endsection