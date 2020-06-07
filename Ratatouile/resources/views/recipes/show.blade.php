@extends('layouts.admin')
@section('content')
<div class="card mb-3">
  <img src="{{asset('uploads/recipes/'.$recipe->recipe_image)}}" class="card-img-top" alt="..." style="margin-left:50px width:200px;height:300px;>

  <div class="card-body">
     {{-- <strong><i class="far fa-clock"></i> Recipe Name</strong> --}}
    <h1 class="card-title" style="text-align: center">{{$recipe->RecipeName}}</h1>
    <h1 class="card-title" style="text-align: center">{{$recipe->created_at}}</h1>
    <h1 class="card-title" style="text-align: center">{{$recipe->updated_at}}</h1>

    <h1 class="card-title" style="text-align: center">{{$recipe->TakenTime}}</h1>
    <h1 class="card-title" style="text-align: center">{{$recipe->Serving}}</h1>
  
    <p class="card-text" style="text-align: center"m> {{$recipe->details}}</p>



  </div>
</div>


      
      @endsection