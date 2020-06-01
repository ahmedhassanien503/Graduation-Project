@extends('layouts.admin')
@section('content')

<div class="d-flex align-content-stretch flex-wrap" style="text-align:center">
  <div class="container " style="text-align:center">
      <a href="{{route('answer.create')}}"  class="btn btn-success mb-5" style="align-center">
        New Answer
        <i class="far fa-plus-square"></i>
      </a>
  </div>
  <table class="table table-bordered table-hover table-dark" class="mx-auto" style="background-color: 	rgb(52, 57, 64)" id="doctor_table">
    <thead class="thead-light">
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Question</th>
        <th scope="col">Answer</th>
        <th scope="col">UserName</th>
        <th scope="col">ChefName</th>
        <th scope="col">Actions</th>
        <th scope="col"></th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      @foreach($answers as $answer)
        <tr>     
          <th scope="row">{{ $answer->id }}</th>
            <td>{{ $answer->question->question}} </td>
            <td>{{ $answer->answer }} </td>
            <td>{{ $answer->question->user->name}} </td>
            <td>{{$answer->chef->name}}</td>
            <td><a href="{{route('answer.show',['answer' => $answer->id])}}" class="btn btn-outline-primary btn-sm" >  <i class="fas fa-folder">
              </i> View</a>
            </td>
            <td><a href="{{route('answer.edit',['answer' => $answer->id])}}" class="btn btn-outline-info btn-sm" > <i class="fas fa-pencil-alt">
              </i> Edit</a>
            </td>
          <td> 
            <form method="POST" action="{{route('answer.destroy',['answer' => $answer->id])}}" >
                @method('DELETE')
                @csrf
                <button type="submit" class="btn btn-outline-danger btn-sm" onclick="return confirm('Are you sure you want to delete this question?')">
                  <i class="fas fa-trash-alt"></i> Delete
                </button>
            </form>
          </td>      
        </tr>
      @endforeach
    </tbody>
  </table> 
</div>
@endsection
