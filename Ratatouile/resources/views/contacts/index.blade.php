@extends('layouts.admin')
@section('content')

<div class="d-flex align-content-stretch flex-wrap" style="text-align:center">
    <div class="container " style="text-align:center">
        <br>
        <a href="{{route('contacts.create')}}"  class="btn btn-success mb-5" style="align-center" > New Contact <i class="far fa-plus-square"></i> </a>
        {{-- <button type="button" class="btn btn-lg btn-primary" >Primary button</button> --}}
      
      <table class="table table-bordered table-hover table-dark" class="mx-auto" style="background-color: 	rgb(52, 57, 64)" >
        <thead class="thead-light">
            <tr>
              <th scope="col">Created at</th>
              <th scope="col">Updated at</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
               <th scope="col">Message</th>
      
         
            </tr>
          </thead>
        </div>

    </div>

    @foreach($contacts as $contact)
    <tr>
    
      <td>{{$contact->created_at}}</td>
      <td>{{$contact->updated_at}}</td>
      <td>{{$contact->name}}</td>
      <td>{{$contact->email}}</td>
      <td>{{$contact->message}}</td>
   
 
    </tr> 
    @endforeach
</table>
<div class="row">
  <div class="col-12 text-center">
    {{-- {{$contacts->links()}} --}}

  </div>
</div>


@endsection
