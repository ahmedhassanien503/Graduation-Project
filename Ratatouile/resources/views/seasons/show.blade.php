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
                    <h1 class="lead"><b>{{$season->SeasonName}}</b></h1>
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
                  <a href="{{route('seasons.edit',['season' => $season->id])}}"  class="btn btn-md btn-primary">
                    <i class="fas fa-edit"></i> Edit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
@endsection

