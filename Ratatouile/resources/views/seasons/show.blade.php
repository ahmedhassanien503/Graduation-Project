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
                Season Details
              </div>
              <div class="card-body pt-0">
                <div class="row">
                  <div class="col-md-12">

                    <div class="text-center">
                      <img class="profile-user-img img-fluid img-circle" style="width:300px;height:300px;"
                           src="{{asset('uploads/seasons/'.$season->image)}}"
                           alt="User profile picture">
                    </div>
                    <h1 class="lead"><b>{{$season->season_name}}</b></h1>
                    <h5 class= ""> Season ID: {{$season->id}}</h5>
                    <h5 class= ""> Added On: {{$season->created_at}}</h5>
                  </div>
               
                </div>
              </div>
              <div class="card-footer">
                <div class="text-center">
                  <a href="{{route('seasons.index')}}" class="btn btn-md bg-teal">
                    <i class="fas fa-arrow-left"></i> Back
                  </a>
                  <a href="{{route('seasons.edit',['season' => $season->id])}}"  class="btn btn-md btn-warning">
                    <i class="fas fa-edit"></i> Edit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
@endsection

