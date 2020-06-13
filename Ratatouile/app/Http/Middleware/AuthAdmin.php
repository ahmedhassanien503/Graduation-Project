<?php

namespace App\Http\Middleware;
use Auth;
use Illuminate\Support\Facades\Session;

use Closure;

class AuthAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {  if (false == Auth::guard('admin')->check()) {
        return redirect()->route('admin.login');
      
        }
        return $next($request);
        // return redirect()->route('admin');
    }
}
