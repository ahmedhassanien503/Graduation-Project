@extends('layouts.admin')
@section('content')
<section class="content-header">
  <div class="container-fluid">
    <div class="row mb-2">
      <div class="col-sm-6">
        <h1>Applicant {{$applicant->user->name}}</h1>
      </div>
      <div class="col-sm-6">
        <ol class="breadcrumb float-sm-right">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item active">Applicant Information</li>
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
                   src="{{asset('uploads/users/'.$applicant->user->image)}}"
                   alt="User profile picture">
            </div>

          <h1 class="text-center">{{$applicant->user->name}}</h1>

            <h5 class="text-muted text-center">Applicant Number "{{$applicant->id}}"</h5>
        
          </div>
          <!-- /.card-body -->
        </div>
        <!-- /.card -->

        <!-- About Me Box -->
        
        <div class="card card-primary">
          <div class="card-header">
            <h3 class="card-title">About Applicant</h3>
          </div>
          <!-- /.card-header -->
          <div class="card-body"  style="text-align:center">
            <strong><i class="fas fa-signature"></i> Applicant Name</strong>

            <p class="text-muted">
             {{$applicant->user->name}}
            </p>

            <hr>

            <strong><i class="far fa-envelope-open"></i>  Applicant Email</strong>

            <p class="text-muted">{{$applicant->user->email}}</p>

            <hr>

            <strong><i class="fas fa-pencil-alt mr-1"></i> Enrolled Workshop</strong>

            <p class="text-muted">
              <span class="tag tag-danger">{{ $applicant->workshop->name}}</span>
           
            </p>

            <hr>

            <strong><i class="far fa-question-circle"></i> Status</strong>

            <p class="text-muted">{{$applicant->is_accepted? 'Accepted':'Rejected'}}</p>

            <hr>

            <div class="container " style="text-align:center">
                <a href="{{route('applicants.index')}}" class="btn btn-secondary"><i class="fas fa-arrow-left"></i>  Back</a>

                <form method="POST" class='d-inline' action=''>
                    @method('PATCH') 
                    @csrf
                        @if($applicant->is_accepted)         
                          <td><a href="{{route('applicants.reject',['applicant' => $applicant->id])}}" class="btn btn-warning" data-id='$applicant->id' > Reject  <i class="fas fa-user-slash">
                        </i></a></td>           
                        @else
                          <td><a href="{{route('applicants.accept',['applicant' => $applicant->id])}}" class="btn btn-success" data-id='$applicant->id'> Accept <i class="far fa-check-square"></i> </a></td>    
                        @endif
                </form>
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