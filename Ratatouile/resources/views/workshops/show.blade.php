@extends('layouts.admin')
@section('content')
<section class="content-header">
  <div class="container-fluid">
    <div class="row mb-2">
      <div class="col-sm-6">
        <h1>{{$workshop->name}} Workshop</h1>
      </div>
      <div class="col-sm-6">
        <ol class="breadcrumb float-sm-right">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item active">Workshop Details</li>
        </ol>
      </div>
    </div>
  </div><!-- /.container-fluid -->
</section>

<!-- Main content -->
<section class="content">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">

        <!-- Profile Image -->
        <div class="card card-primary card-outline">
          <div class="card-body box-profile">
            <div class="text-center">
              <img class="profile-user-img img-fluid img-square" style="width:300px;height:300px;"
                   src="{{asset('uploads/workshops/'.$workshop->image)}}"
                   alt="User profile picture">
            </div>

          <h1 class="text-center">{{$workshop->name}}</h1>

            <h5 class="text-muted text-center">Workshop</h5>
        
          </div>
          <!-- /.card-body -->
        </div>
        <!-- /.card -->

        <!-- About Me Box -->
        
        <div class="card card-primary">
          <div class="card-header">
            <h3 class="card-title">About Workshop</h3>
          </div>
          <!-- /.card-header -->
          <div class="card-body"  style="text-align:center">
            <strong><i class="fas fa-file-signature"></i> Workshop Name</strong>

            <p class="text-muted">
             {{$workshop->name}}
            </p>

            <hr>

            <strong><i class="fas fa-calendar-week"></i> Added On</strong>

            <p class="text-muted">{{$workshop->created_at}}</p>

            <hr>

            <strong><i class="fas fa-pencil-alt mr-1"></i> Chef Name</strong>

            <p class="text-muted">
              <span class="tag tag-danger">{{ $workshop->user->name}}</span>
           
            </p>

            <hr>

            <strong><i class="fas fa-sort-numeric-up-alt"></i> Number of Applicants</strong>

            <p class="text-muted">{{$workshop->no_of_applicant}}</p>

            <hr>

            <strong><i class="far fa-clock"></i> Applying Deadline</strong>

            <p class="text-muted">{{ $workshop->app_deadline}}</p>
            <hr>

            <strong><i class="far fa-file-alt mr-1"></i>  Description</strong>

            <p class="text-muted">{{$workshop->description}}</p>
            
            <hr>

            <div class="container " style="text-align:center">
                <a href="{{route('workshops.index')}}" class="btn btn-secondary"><i class="fas fa-arrow-left"></i>  Back</a>

                <a href="{{route('workshops.edit',['workshop' => $workshop->id])}}" class="btn btn-info">Edit <i class="far fa-edit"></i> </a>
              </div>
          </div>
          <!-- /.card-body -->
        </div>
        <!-- /.card -->
      </div>
      <!-- /.col -->
     
                
            <!-- /.tab-content -->
          </div><!-- /.card-body -->
        </div>
        <!-- /.nav-tabs-custom -->
      </div>
      <!-- /.col -->
    </div>
    <!-- /.row -->
  </div><!-- /.container-fluid -->
</section>
<!-- /.content -->
</div>
<!-- /.content-wrapper -->

@endsection