@extends('layouts.admin')
@section('content')

<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->    
    <section class="content-header">
        <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>Question</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="{{route('question.index')}}">Home</a></li>
                            <li class="breadcrumb-item active">Create New Question</li>
                        </ol>
                    </div>
                </div>
        </div><!-- /.container-fluid -->
    </section>

    <section class="content h-100 ">
        <div class="row">
            <div class="col-md-6 ">
                <div class="card card-primary">
                        <div class="card-header">
                            <h3 class="card-title">Add Question Details!</h3>
                            <div class="card-tools">
                                <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                                <i class="fas fa-minus"></i></button>
                            </div>
                        </div>
                    <div class="card-body">
                        <form method="POST" action='{{$action}}' enctype="multipart/form-data">
                            @if(isset($question))
                                @method('PUT')
                            @endif 
                            @csrf
                            <div class="form-group">
                                <label for="question">Add Question Content</label>
                                @if(isset($question))
                                    <input type="text" id="inputName" name="question" value='{{$question->question}}' class="form-control">
                                @else
                                    <input type="text" id="inputName" name="question"  class="form-control">
                                @endif         
                            </div>
                            <div class="form-group col-md-6">
                                <label for="exampleFormControlTextarea1">User</label>
                                <select name="user_id" class="form-control" required>
                            
                                    @if(isset($question))
                                        <option value="{{$question->user->id}}">{{$question->user->name}}</option>
                                        @foreach ($users as $user)
                                            @if ($user->name === $question->user->name )
                                                <option value="{{$user->id}}" hidden> {{$user->name}}</option>
                                            @else
                                                <option value="{{$user->id}}"> {{$user->name}}</option>
                                            @endif
                                        @endforeach
                                    @else
                                        @foreach ($users as $user)
                                            <option value="{{$user->id}}">{{$user->name}}</option>
                                        @endforeach
                                    @endif
                            
                                </select>
                            </div>
                            <div class="row ">
                                <div class="col-12">
                                    <a href="{{route('question.index')}}" class="btn btn-secondary">Cancel</a>
                                    <input type="submit" value="Add Question" class="btn btn-success float-right">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- /.content -->
</div> <!-- /.content-wrapper -->
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