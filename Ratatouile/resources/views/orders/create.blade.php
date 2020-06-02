@extends('layouts.admin')
@section('content')

<div class="container " style="text-align:center">    
    <section class="content-header ">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-12">
            <h1>Add New Order</h1>
          </div>
          <div class="col-sm-12">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Order Add</li>
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
              <h3 class="card-title">Create your own Order!</h3>

              <div class="card-tools">
                <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                  <i class="fas fa-minus"></i></button>
              </div>
            </div>
            <div class="card-body">
                <form method="POST" action="{{route('orders.store')}}" enctype="multipart/form-data">
                    @csrf
              <div class="form-group">
                <label for="inputName">Order's Address</label>
                <input type="text" id="inputName" name="address" class="form-control">
              </div>
              <div class="form-group">
                <label for="inputName">Order's Date</label>
                <input type="text" id="inputName" name="date" class="form-control">
              </div>
              <div class="form-group">
                <label for="inputName">Order's Total Price </label>
                <input type="text" id="inputName" name="total_price" class="form-control">
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
                <label for="inputStatus">Users</label>
                <select name="user_id" class="form-control custom-select">
                  <option selected disabled>Select User</option>
                  @foreach($users as $user)
                  <option value="{{$user->id}}">{{$user->name}}</option>
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
          <a href="{{route('orders.index')}}" class="btn btn-secondary"><i class="fas fa-arrow-left"></i>  Back</a>
          <button type="submit" class="btn btn-success float-right"> Submit Order <i class="far fa-calendar-plus"></i></button>
        </form>
        </div>
      {{-- </div> --}}
    </section>

    <!-- /.content -->
  </div>
  
    
  <!-- /.content-wrapper -->

@endsection