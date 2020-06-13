@extends('layouts.admin')
@section('content')

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" >Recipe Editing</a>
</nav>

@if ($errors->any())
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif

<div class="container">
<form method="POST" action="{{route('recipes.update',['recipe' => $recipe->id])}}" enctype="multipart/form-data">
    @method('PUT')
    @csrf
    <div class="form-row">
      <div class="col-md-6 mb-3">
        <label for="validationDefault01">Created at</label>
        <input name="created_at" type="text" class="form-control" id="validationDefault01"  value="{{ $recipe['created_at'] }}" required>
      </div>
      <div class="col-md-6 mb-3">
        <label for="validationDefault02">Updated at</label>
        <input name="updated_at" type="text" class="form-control" id="validationDefault02" value="{{ $recipe['updated_at'] }}" required>
      </div>
    </div>
 
      <div class="form-row">
        <div class="col-md-6 mb-3">
          <label for="validationDefault01">Recipe Name</label>
          <input name="RecipeName" type="text" class="form-control" id="validationDefault01" value="{{ $recipe['RecipeName'] }}" required>
        </div>
        <div class="col-md-6 mb-3">
          <label for="validationDefault02">Title</label>
          <input name="title" type="text" class="form-control" id="validationDefault02" value="{{ $recipe['title'] }}" required>
        </div>
      </div>
        <div class="col-md-6 mb-3">
          <label for="validationDefault02">Details</label>
          <input name="details" type="text" class="form-control" id="validationDefault02" value="{{ $recipe['details'] }}" required>
        </div>
      </div>

        <div class="form-row">
        <div class="col-md-6 mb-3">
            <label for="exampleFormControlFile1">Image</label>
            <input name="image" type="file" class="form-control-file" id="exampleFormControlFile1" value="{{ $recipe['recipe_image'] }}">
            </div> 


       
            <div class="col-md-6 mb-3">
              <label for="validationDefault01">Serving</label>
              <input name="Serving" type="text" class="form-control" id="validationDefault01" value="{{ $recipe['Serving'] }}" required>
            </div>
        </div>
     

            <div class="form-row">
              <div class="col-md-6 mb-3">
                <label for="validationDefault01">Time</label>
                <input name="TakenTime" type="text" class="form-control" id="validationDefault02" value="{{ $recipe['TakenTime'] }}" required>
              </div>
        
        
                 <div class="col-md-6 mb-3">
                  <label for="validationDefault01">User</label>
                  <input name="user_id" type="text" class="form-control" id="validationDefault01" value="{{ $recipe['user_id'] }}" required>
                </div>
            </div>
       
               
      <button class="btn btn-outline-primary" type="submit" style="align-center">Update</button>

               
  </form>
</div>


@endsection