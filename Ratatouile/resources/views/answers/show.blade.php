@extends('layouts.admin')
@section('content')
<section class="content-header">
  <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1>Answer</h1>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="{{route('answer.index')}}">Home</a></li>
                    <li class="breadcrumb-item active">Answer Content</li>
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
                <!-- Question Details -->   
                <div class="card card-primary">
                <div class="card-header">
                    <h3 class="card-title">Answer Details</h3>
                </div>
                <div class="card-body">
                    <strong><i class="fas fa-book mr-1"></i> content</strong>
                    <p class="text-muted">
                        {{$answer->answer}}
                    </p>
                    <p class="text-muted">
                        For: {{$answer->question->question}}
                        <strong>By: {{$answer->question->user->name}}</strong>
                    </p>
                    <hr>
                    <strong> By: {{$answer->user->name}}</strong>
                    <p class="text-muted"> created_at: {{$answer->created_at}}</p>
                    <hr>

                </div> <!-- /.card -->

        </div><!-- /.row -->
  </div><!-- /.container-fluid -->
</section><!-- /.content -->
</div><!-- /.content-wrapper -->
<footer class="main-footer">
<div class="float-right d-none d-sm-block">
  <b>Version</b> 3.0.4
</div>
<strong>Copyright &copy; 2014-2019 <a href="http://adminlte.io">AdminLTE.io</a>.</strong> All rights
reserved.
</footer>

<!-- Control Sidebar -->
<aside class="control-sidebar control-sidebar-dark">
<!-- Control sidebar content goes here -->
</aside>

@endsection