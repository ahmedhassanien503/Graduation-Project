@extends('layouts.admin')

@section('content')
<div class="container">
    <br>
    <br>
    <br>
<div class="container " style="text-align:center">
<section class="content">

    <div class="card card-solid">
      <div class="card-body pb-0">
        <div class="d-flex justify-content-center">
          <div class="container">
            <div class="card bg-light">
              <div class="card-header text-muted border-bottom-0">
                Seasonal Recipe Details
              </div>
              <div class="card-body pt-0">
                <div class="row">
                  <div class="col-md-12">

                  
                    <h1 class="lead"><b>Season Name:{{$seasonalrecipe->season->season_name}}</b></h1>
               
                    <h1 class="lead"><b>Recipe Name:{{$seasonalrecipe->Recipe->RecipeName}}</b></h1>
                  </div>
               
                </div>
              </div>
              <div class="card-footer">
                <div class="text-center">
                  <a href="{{route('seasonalrecipes.index')}}" class="btn btn-md bg-teal">
                    <i class="fas fa-arrow-left"></i> Back
                  </a>
                  <a href="{{route('seasonalrecipes.edit',['seasonalrecipe' => $seasonalrecipe->id])}}"  class="btn btn-md btn-warning">
                    <i class="fas fa-edit"></i> Edit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
@endsection

