@extends('layouts.admin')


@section('content')

<div class="d-flex align-content-stretch flex-wrap" style="text-align:center">
    <div class="container " style="text-align:center">
        <br>
      
  <a href="{{route('seasons.create')}}"  class="btn btn-success mb-5" style="align-center" > New Season  <i class="far fa-plus-square"></i></a></div>
      <table class="table table-bordered table-hover table-dark" class="mx-auto" style="background-color: 	rgb(52, 57, 64)" id="doctor_table">
        <thead class="thead-light">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Season</th>
              <th scope="col">Added On</th>
              <th scope="col" colspan="3">Actions</th>
             
            </tr>
          </thead>
          <tbody>
            @foreach($seasons as $season)
            <tr>
                
            <th scope="row">{{ $season->id }}</th>
              <td>{{ $season->SeasonName }} </td>
              <td>{{ $season->created_at}} </td>
         
              <td><a href="{{route('seasons.show',['season' => $season->id])}}" class="btn btn-outline-primary btn-rounded" >  <i class="fas fa-folder">
            </i> View</a></td>
              <td><a href="{{route('seasons.edit',['season' => $season->id])}}" class="btn btn-outline-info btn-rounded" > <i class="fas fa-pencil-alt">
            </i> Edit</a></td>
            <td> 
                <form method="POST" action="{{route('seasons.destroy',['season' => $season->id])}}" >
                    @method('DELETE')
                    @csrf
                    <button type="submit" class="btn btn-outline-danger  btn-rounded" onclick="return confirm('Are you sure you want to delete this season?')"><i class="fas fa-trash-alt">
                    </i> Delete</button>
                </form>
            </td>
    
            </tr>
          @endforeach
          </tbody>
        </table> 

        
        {{$seasons->links()}}
  </div>

  @endsection