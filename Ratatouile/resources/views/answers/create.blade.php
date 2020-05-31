@extends('layouts.admin')
@section('content')

<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->    
    <section class="content-header">
        <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>Answer</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="{{route('answer.index')}}">Home</a></li>
                            <li class="breadcrumb-item active">Create New Answer</li>
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
                            <h3 class="card-title">Add Answer Details!</h3>
                            <div class="card-tools">
                                <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                                <i class="fas fa-minus"></i></button>
                            </div>
                        </div>
                    <div class="card-body">
                        <form method="POST" action='{{$action}}' enctype="multipart/form-data">
                            @if(isset($answer))
                                @method('PUT')
                            @endif 
                            @csrf
                            <div class="form-group">
                                <label for="answer">Add Answer Content</label>
                                @if(isset($answer))
                                    <input type="text" id="inputName" name="answer" value='{{$answer->answer}}' class="form-control">
                                @else
                                    <input type="text" id="inputName" name="answer"  class="form-control">
                                @endif         
                            </div>
                            <div class="form-group col-md-6">
                                <label for="exampleFormControlTextarea1">Chef</label>
                                <select name="chef_id" class="form-control" required>
                            
                                    @if(isset($answer))
                                        <option value="{{$answer->chef->id}}">{{$answer->chef->name}}</option>
                                        @foreach ($chefs as $chef)
                                            @if ($chef->name === $answer->chef->name )
                                                <option value="{{$chef->id}}" hidden> {{$chef->name}}</option>
                                            @else
                                                <option value="{{$chef->id}}"> {{$chef->name}}</option>
                                            @endif
                                        @endforeach
                                    @else
                                        @foreach ($chefs as $chef)
                                            <option value="{{$chef->id}}">{{$chef->name}}</option>
                                        @endforeach
                                    @endif
                            
                                </select>
                            </div>
                            <div class="form-group col-md-12">
                                <label for="exampleFormControlTextarea1">Question</label>
                                    @if(isset($answer))
                                        <input type="text" id="inputName" name="answer" value='{{$answer->question->question}}' class="form-control" disabled> 
                                    @else
                                        <select name="question_id" class="form-control" required>
                                        @foreach ($questions as $question)
                                            <option value="{{$question->id}}"> {{$question->question}}</option>
                                        @endforeach
                                    @endif
                                </select>
                            </div>
                            <div class="row ">
                                <div class="col-12">
                                    <a href="{{route('answer.index')}}" class="btn btn-secondary">Cancel</a>
                                    <input type="submit" value="Add answer" class="btn btn-success float-right">
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