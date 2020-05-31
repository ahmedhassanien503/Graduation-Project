@extends('layouts.admin')
@section('content')

<div class="container " style="text-align:center">    
    <section class="content-header ">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-12">
            <h1>Add New Workshop</h1>
          </div>
          <div class="col-sm-12">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Workshop Add</li>
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
              <h3 class="card-title">Cooking School!</h3>

              <div class="card-tools">
                <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                  <i class="fas fa-minus"></i></button>
              </div>
            </div>
            <div class="card-body">
                <form method="POST" action="{{route('workshops.store')}}" enctype="multipart/form-data">
                    @csrf
              <div class="form-group">
                <label for="inputName">Workshop's Name</label>
                <input type="text" id="inputName" name="name" class="form-control">
              </div>
              <div class="form-group">
                <label for="inputName">Workshop's Description </label>
                <input type="text" id="inputName" name="description" class="form-control">
              </div>
              <div class="form-group">
                <label for="inputName">Number of Applicants </label>
                <input type="text" id="inputName" name="no_of_applicant" class="form-control" placeholder="example: 30">
              </div>
              <div class="form-group">
                <label for="inputClientCompany">Applying Deadline</label>
                <input type="text" name="app_deadline" id="inputClientCompany" class="form-control" placeholder="example: 1-1-2001">
              </div>
           <div class="form-group">
                <label for="inputStatus">Chefs</label>
                <select name="chef_id" class="form-control custom-select">
                  <option selected disabled>Select Chef</option>
                  @foreach($chefs as $chef)
                  <option value="{{$chef->id}}">{{$chef->name}}</option>
                  @endforeach
                </select>
              </div>
              <div class="form-group">
                <div class="form-group">
                  <label for="image">Image</label>
                  <input type="file" class="d-block" id="image" name="image" accept="image/*">
                </div>
              </div>   
            </div>
          </div>
              
              
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->
        </div>

        <div class="container " style="text-align:left">
          <a href="{{route('workshops.index')}}" class="btn btn-secondary"><i class="fas fa-arrow-left"></i>  Back</a>
          <button type="submit" class="btn btn-success float-right"> Schedule Workshop <i class="far fa-calendar-plus"></i></button>
        </form>
        </div>
      {{-- </div> --}}
    </section>

    <!-- /.content -->
  </div>
  
    
  <!-- /.content-wrapper -->

@endsection