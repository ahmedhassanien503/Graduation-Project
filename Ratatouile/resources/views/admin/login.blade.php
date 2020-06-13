@extends('layouts.adminApp')

@section('content')

    <div class="container" style="margin-top: 350px">
      <div class="row justify-content-center">
        <div class="login-box">
          <div class="card">
            <div class="card-body login-card-body"  style="width: 700px; height: 320px;">
              <p class="login-box-msg justify-content-center">{{ __('Login') }}</p>

              <form  method="POST" action="{{ route('admin.post.login') }}">
                @csrf
                <div class="input-group mb-3">
                  
                  <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" placeholder="email" autofocus>
                  <div class="input-group-append">
                    <div class="input-group-text">
                      <span class="fas fa-envelope"></span>
                    </div>
                  </div>
                    @error('email')
                      <span class="invalid-feedback" role="alert">
                          <strong>{{ $message }}</strong>
                      </span>
                    @enderror
                </div>
                <div class="input-group mb-3">
                  
                  <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password" placeholder="password">
                  <div class="input-group-append">
                    <div class="input-group-text">
                      <span class="fas fa-lock"></span>
                    </div>
                  </div>
                    @error('password')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                <br>
          
                <div class="row">
                  <div class="col-12">
                    <div class="icheck-primary">
                      <input  type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                      <label for="remember">
                      {{ __('Remember Me') }}
                      </label>
                    </div>
                  </div>
                  <br>
                  <br>
                  <!-- /.col -->
                  <div class="col-12">
                    <button type="submit" class="btn btn-primary btn-block">Sign In</button>

                    

                  </div>
                  <!-- /.col -->
                </div>
              </form>
            </div>
            <!-- /.login-card-body -->
          </div>
        </div>
        <!-- /.login-box -->
      </div>
    </div>

    @endsection