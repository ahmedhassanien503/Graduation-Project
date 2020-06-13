@extends('layouts.admin')
@section('content')
<section class="content-header">
  <div class="container-fluid">
    <div class="row mb-2">
      <div class="col-sm-6">
        <h1>{{$order->id}} Order</h1>
      </div>
      <div class="col-sm-6">
        <ol class="breadcrumb float-sm-right">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item active">Order Details</li>
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

          <h1 class="text-center">{{$order->id}}</h1>

            <h5 class="text-muted text-center">Order</h5>
        
          </div>
          <!-- /.card-body -->
        </div>
        <!-- /.card -->

        <!-- About Me Box -->
        
        <div class="card card-primary">
          <div class="card-header">
            <h3 class="card-title">About Order</h3>
          </div>
          <!-- /.card-header -->
          <div class="card-body"  style="text-align:center">
          <strong><i class="fas fa-file-signature"></i> Order ID</strong>

                 <p class="text-muted">
                   {{$order->id}}
                   </p>

                   <hr>

        <strong><i class="fas fa-calendar-week"></i> Order Description</strong>

<p class="text-muted">{{$order->description}}</p>

<hr>

<strong><i class="fas fa-calendar-week"></i> Order Payment method</strong>

<p class="text-muted">{{$order->payment_method}}</p>

<hr>
          
            <strong><i class="fas fa-calendar-week"></i> Order Address</strong>

            <p class="text-muted">{{$order->address}}</p>

            <hr>

            <strong><i class="fas fa-calendar-week"></i> Order Delivery Date</strong>

            <p class="text-muted">{{$order->date}}</p>

            <hr>

            <strong><i class="fas fa-calendar-week"></i> Order Total Price</strong>

             <p class="text-muted">{{$order->total_price}}</p>

            <hr>
            <strong><i class="fas fa-pencil-alt mr-1"></i> Chef Name</strong>

            <p class="text-muted">
              <span class="tag tag-danger">{{ $order->chef->name}}</span>
           
            </p>

            <hr>
            <strong><i class="fas fa-pencil-alt mr-1"></i> User Name</strong>

            <p class="text-muted">
            <span class="tag tag-danger">{{ $order->user->name}}</span>

            </p>

            <hr>

            <div class="container " style="text-align:center">
                <a href="{{route('orders.index')}}" class="btn btn-secondary"><i class="fas fa-arrow-left"></i>  Back</a>

                <a href="{{route('orders.edit',['order' => $order->id])}}" class="btn btn-info">Edit <i class="far fa-edit"></i> </a>
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