@extends('layouts.admin')
@section('content')

<div class="d-flex align-content-stretch flex-wrap" style="text-align:center">
    <div class="container " style="text-align:center">
        <br>
      
  <a href="{{route('applicants.create')}}"  class="btn btn-success mb-5" style="align-center" >New Applicant <i class="far fa-plus-square"></i> </a></div>
      <table class="table table-bordered table-hover table-dark" class="mx-auto" style="background-color: 	rgb(52, 57, 64)" id="doctor_table">
        <thead class="thead-light">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Applicant Name</th>
              <th scope="col">Email</th>
              <th scope="col">Workshop</th>
              <th scope="col">Avatar</th>
              <th scope="col">Status</th>
              <th scope="col">Applied On</th>
              <th scope="col" colspan="4">Actions</th>
              
            
            </tr>
          </thead>
          <tbody>
            @foreach($applicants as $applicant)
            <tr>
                
              <th scope="row">{{ $applicant->id }}</th>
              <td>{{ $applicant->user->name }} </td>
              <td>{{$applicant->user->email }}</td>
              <td>{{ $applicant->workshop->name}}</td>
              <td><img src="{{asset('uploads/applicants/'.$applicant->user->image)}}" width="90px" height="90px"></td>
              <td>{{ $applicant->is_accepted ? 'Accepted':'Rejected'}} </td>
              <td>{{ $applicant->created_at}} </td>
              
              
              <td><a href="{{route('applicants.show',['applicant' => $applicant->id])}}" class="btn btn-outline-primary btn-sm" >  <i class="fas fa-folder">
            </i> View</a></td> 
             
            <td> 
                <form method="POST" action="{{route('applicants.destroy',['applicant' => $applicant->id])}}" >
                    @method('DELETE')
                    @csrf
                    <button type="submit" class="btn btn-outline-danger btn-sm" onclick="return confirm('Are you sure you want to remove this applicant?')"><i class="fas fa-trash-alt">
                    </i> Delete</button>
                </form>
            </td>
            
    <form method="POST" class='d-inline' action=''>
        @method('PATCH') 
        @csrf
            @if($applicant->is_accepted)         
              <td><a href="{{route('applicants.reject',['applicant' => $applicant->id])}}" class="btn btn-outline-warning btn-sm" data-id='$applicant->id' >  <i class="fas fa-user-slash">
              </i> Reject</a></td>           
            @else
              <td><a href="{{route('applicants.accept',['applicant' => $applicant->id])}}" class="btn btn-outline-success btn-sm" data-id='$applicant->id'>  <i class="far fa-check-square"></i>  Accept</a></td>    
            @endif
    </form>


            </tr>
          @endforeach
          </tbody>
        </table> 
        {{$applicants->links()}}
  </div>

  @endsection