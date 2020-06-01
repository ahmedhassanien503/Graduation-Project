@extends('layouts.admin')
@section('content')

<div class="container " style="text-align:center">    
    <section class="content-header ">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-12">
            <h1>Add New Applicant</h1>
          </div>
          <div class="col-sm-12">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Applicant Add</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <section class="content h-100 ">
      <div class="row">
        <div class="col-md-12 ">
          <div class="card card-primary">
            <div class="card-header">
              <h3 class="card-title">Best of Luck!</h3>

              <div class="card-tools">
                <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                  <i class="fas fa-minus"></i></button>
              </div>
            </div>
            <div class="card-body">
                <form method="POST" action="{{route('applicants.store')}}" enctype="multipart/form-data">
                    @csrf
           <div class="form-group">
                <label for="inputStatus">Users</label>
                <select name="user_id" class="form-control custom-select">
                  <option selected disabled>Select User</option>
                  @foreach($users as $user)
                  <option value="{{$user->id}}">{{$user->name}}</option>
                  @endforeach
                </select>
              </div>

              <div class="form-group">
                <label for="inputStatus">Workshops</label>
                <select name="workshop_id" class="form-control custom-select">
                  <option selected disabled>Select Workshop</option>
                  @foreach($workshops as $workshop)
                  <option value="{{$workshop->id}}">{{$workshop->name}}</option>
                  @endforeach
                </select>
              </div>
        
            </div>
          </div>
              
              
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->
        </div>

        <div class="container " style="text-align:left">
          <a href="{{route('applicants.index')}}" class="btn btn-secondary"><i class="fas fa-arrow-left"></i>  Back</a>
          <button type="submit" class="btn btn-success float-right"><i class="fas fa-user-plus"></i>  Enroll Applicant </button>
        </form>
        </div>
      {{-- </div> --}}
    </section>

    <!-- /.content -->
  </div>
  
    
  <!-- /.content-wrapper -->

@endsection