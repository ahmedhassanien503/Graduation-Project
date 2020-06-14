@extends('layouts.admin')
@section('content')

<div class="d-flex align-content-stretch flex-wrap" style="text-align:center">
    <div class="container " style="text-align:center">
        <br>
        <a href="{{route('recipes.create')}}"  class="btn btn-success mb-5" style="align-center" > New Recipe <i class="far fa-plus-square"></i> </a>
        {{-- <button type="button" class="btn btn-lg btn-primary" >Primary button</button> --}}
      
      <table class="table table-bordered table-hover table-dark" class="mx-auto" style="background-color: 	rgb(52, 57, 64)" >
        <thead class="thead-light">
            <tr>
              <th scope="col">Created at</th>
              <th scope="col">Updated at</th>
              <th scope="col">Recipe Name</th>
              <th scope="col">Title</th>
              <th scope="col">Details</th>
               <th scope="col">Image</th>
               <th scope="col">Serving</th>
               <th scope="col">Taken Time</th>
               <th scope="col">User</th>
               <h3><th scope="col">Actions</th> </h3>
               <th scope="col"></th>
               <th scope="col"></th>
            </tr>
          </thead>
        </div>

    </div>

    @foreach($recipes as $recipe)
    <tr>
    
      <td>{{$recipe->created_at}}</td>
      <td>{{$recipe->updated_at}}</td>
      <td>{{$recipe->RecipeName}}</td>
      <td>{{$recipe->title}}</td>
      <td>{{$recipe->details}}</td>
      <td><img src="{{asset('uploads/recipes/'.$recipe->recipe_image)}}" width="100px" height="100px"></td>
      <td>{{$recipe->Serving}}</td>
      <td>{{$recipe->TakenTime}}</td>
      {{-- <td>{{$recipe->user->name}}</td> --}}
   
   
    <td><a href="{{route('recipes.show',['recipe' => $recipe->id])}}"  class="btn btn-outline-info" >  <i class="fas fa-folder">
     </i> View</a></td>

      <td><a href="{{route('recipes.edit',['recipe' => $recipe->id])}}" class="btn btn-outline-warning" > <i class="fas fa-pencil-alt">
    </i> Edit</a></td>
    <td> 
        <form method="POST" action="{{route('recipes.destroy',['recipe' => $recipe->id])}}" >
            @method('DELETE')
            @csrf


            <button type="submit" class="btn btn-outline-danger" onclick="return confirm('Are you sure you want to delete this Recipe?')"><i class="fas fa-trash-alt">
            </i> Delete</button>
        </form>
    </tr> 
    @endforeach
</table>
<div class="row">
  <div class="col-12 text-center">
    {{$recipes->links()}}

  </div>
</div>


@endsection
