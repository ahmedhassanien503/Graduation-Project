@extends('layouts.admin')
@section('content')
<div class="card mb-3">
  <img src="{{asset('uploads/recipes/'.$recipe->image)}}" class="card-img-top" alt="..." style="margin-left:50px width:200px;height:300px;">

  <div class="card-body">
     {{-- <strong><i class="far fa-clock"></i> Recipe Name</strong> --}}
    <h1 class="card-title" style="text-align: center">{{$recipe->RecipeName}}</h1>
    <h1 class="card-title" style="text-align: center">{{$recipe->created_at}}</h1>
    <h1 class="card-title" style="text-align: center">{{$recipe->updated_at}}</h1>

    <h1 class="card-title" style="text-align: center">{{$recipe->TakenTime}}</h1>
    <h1 class="card-title" style="text-align: center">{{$recipe->Serving}}</h1>
  
    <p class="card-text" style="text-align: center"m> {{$recipe->details}}</p>

    <div class="categories">
      @foreach ($recipe->categories as $category)
    <h1 class="card-title" style="text-align: center">{{$category->category_name}}</h1>
    <br/>
          
      @endforeach




  </div>
  @foreach($comments as $comment)

    <div class="display-comment"  style="margin-left:40px;" >

        <strong>{{ $comment->user->name }}</strong>

        <p>{{ $comment->content }}</p>

        <!-- <a href="" id="reply"></a> -->

        @endforeach
        <form method="post" action="{{ route('comments.store') }}">

            @csrf

            <div class="form-group">

                <input type="text" name="content" class="form-control" />

                <input type="hidden" name="recipe_id" value="{{ $recipe->id }}" />
                <input type="text" name="user_id"   />
            </div>

            <div class="form-group">

                <input type="submit" class="btn btn-warning" value="comment" />

            </div>

        </form>


    </div>


</div>
      @endsection