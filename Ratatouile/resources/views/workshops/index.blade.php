@extends('layouts.admin')
@section('content')

<div class="d-flex align-content-stretch flex-wrap" style="text-align:center">
    <div class="container " style="text-align:center">
        <br>
      
  <a href="{{route('workshops.create')}}"  class="btn btn-success mb-5" style="align-center" >New Workshop <i class="far fa-plus-square"></i> </a></div>
      <table class="table table-bordered table-hover table-dark" class="mx-auto" style="background-color: 	rgb(52, 57, 64)" id="doctor_table">
        <thead class="thead-light">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Workshop Name</th>
              <th scope="col">Description</th>
              <th scope="col">Image</th>
              <th scope="col">Chef Name</th>
              <th scope="col">Number of Applicants</th>
              <th scope="col">Applying Deadline</th>
              <th scope="col">Added On</th>
              <th scope="col" colspan="3">Actions</th>
              
            
            </tr>
          </thead>
          <tbody>
            @foreach($workshops as $workshop)
            <tr>
                
            <th scope="row">{{ $workshop->id }}</th>
              <td>{{ $workshop->name }} </td>
              <td>{{$workshop->description }}</td>
              <td><img src="{{asset('uploads/workshops/'.$workshop->image)}}" width="90px" height="90px"></td>
              <td>{{ $workshop->user->name}}</td>
              <td>{{ $workshop->no_of_applicant}} </td>
              <td>{{ $workshop->app_deadline}} </td>
              <td>{{ $workshop->created_at}} </td>
              <td><a href="{{route('workshops.show',['workshop' => $workshop->id])}}" class="btn btn-outline-info btn-sm" >  <i class="fas fa-folder">
            </i> View</a></td>
              <td><a href="{{route('workshops.edit',['workshop' => $workshop->id])}}" class="btn btn-outline-warning btn-sm" > <i class="fas fa-pencil-alt">
            </i> Edit</a></td>
            <td> 
                <form method="POST" action="{{route('workshops.destroy',['workshop' => $workshop->id])}}" >
                    @method('DELETE')
                    @csrf
                    <button type="submit" class="btn btn-outline-danger btn-sm" onclick="return confirm('Are you sure you want to delete this workshop?')"><i class="fas fa-trash-alt">
                    </i> Delete</button>
                </form>
            </td>
            
            </tr>
          @endforeach
          </tbody>
        </table> 
        {{$workshops->links()}}
  </div>

  @endsection