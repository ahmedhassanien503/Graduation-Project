@extends('layouts.admin')
@section('content')

<div class="d-flex align-content-stretch flex-wrap" style="text-align:center">
    <div class="container " style="text-align:center">
        <br>
        <a href="{{route('categories.create')}}"  class="btn btn-outline-warning mb-5" style="align-center" >Add New Category</a>
        {{-- <button type="button" class="btn btn-lg btn-primary" >Primary button</button> --}}
      
      <table class="table table-bordered table-hover table-dark" class="mx-auto" style="background-color: 	rgb(52, 57, 64)" >
        <thead class="thead-dark">
            <tr>
              <th scope="col">Created at</th>
              <th scope="col">Updated at</th>
              <th scope="col">Category</th>
               <h3><th scope="col">Actions</th> </h3>
               <th scope="col"></th>
               {{-- <th scope="col"></th> --}}
            </tr>
          </thead>
        </div>

    </div>

    @foreach($categories as $category)
    <tr>
    
      <td>{{$category->created_at}}</td>
      <td>{{$category->updated_at}}</td>
      <td>{{$category->CategoryName}}</td>
     
   
    {{-- <td><a href="{{route('categories.show',['category' => $category->id])}}"  class="btn btn-outline-primary" >  <i class="fas fa-folder">
     </i> View</a></td> --}}

      <td><a href="{{route('categories.edit',['category' => $category->id])}}" class="btn btn-outline-warning" > <i class="fas fa-pencil-alt">
    </i> Edit</a></td>
    <td> 
        <form method="POST" action="{{route('categories.destroy',['category' => $category->id])}}" >
            @method('DELETE')
            @csrf


            <button type="submit" class="btn btn-outline-danger" onclick="return confirm('Are you sure you want to delete this Recipe?')"><i class="fas fa-trash-alt">
            </i> Delete</button>
        </form>
    </tr> 
    @endforeach


</table>


@endsection
