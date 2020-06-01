@extends('layouts.admin')
@section('content')
<div class="card mb-3">
  <img src="{{asset('uploads/recipes/'.$recipe->image)}}" class="card-img-top" alt="..." style="width:1300px;height:300px;>

  <div class="card-body">
    <h1 class="card-title" style="text-align: center">{{$recipe->RecipeName}}</h1>
    <p class="card-text">{{$recipe->details}}</p>
    <p class="card-text"><small class="text-muted"> {{$recipe->created_at}}</small></p>
    <p class="card-text"><small class="text-muted"> {{$recipe->updated_at}}</small></p>




{{$recipe->Serving}}
{{-- <p class="text-muted">{{$workshop->created_at}}</p> --}}
{{$recipe->TakenTime}}
{{$recipe->user_id}}
{{$recipe->chef_id}}

  </div>
</div>


      
      @endsection