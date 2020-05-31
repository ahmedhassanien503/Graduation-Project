@extends('layouts.admin')
@section('content')

<div class="d-flex align-content-stretch flex-wrap" style="text-align:center">
  <div class="container " style="text-align:center">
      <a href="{{route('question.create')}}"  class="btn btn-success mb-5" style="align-center">
        Add New Question
      </a>
  </div>
  <table class="table table-bordered table-hover table-dark" class="mx-auto" style="background-color: 	rgb(52, 57, 64)" id="doctor_table">
    <thead class="thead-light">
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Question</th>
        <th scope="col">UserName</th>
        <th scope="col">Actions</th>
        <th scope="col"></th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      @foreach($questions as $question)
        <tr>     
          <th scope="row">{{ $question->id }}</th>
            <td>{{ $question->question }} </td>
            <td>{{$question->user_id}}</td>
            <td><a href="{{route('question.show',['question' => $question->id])}}" class="btn btn-primary btn-sm" >  <i class="fas fa-folder">
              </i> View</a>
            </td>
            <td><a href="{{route('question.edit',['question' => $question->id])}}" class="btn btn-info btn-sm" > <i class="fas fa-pencil-alt">
              </i> Edit</a>
            </td>
          <td> 
            <form method="POST" action="{{route('question.destroy',['question' => $question->id])}}" >
                @method('DELETE')
                @csrf
                <button type="submit" class="btn btn-danger btn-sm" onclick="return confirm('Are you sure you want to delete this question?')">
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
