<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\ WorkshopResource;
use App\Workshop;

class WorkshopController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
    */
    public function index()
    {
        return WorkshopResource::collection(
            Workshop::all()
            // Workshop::paginate(4)
        ); 
    }

    public function show($workshop){
        return  Workshop::find($workshop)
            ?new WorkshopResource(
                Workshop::find($workshop)
            ) : 'does not exist';
    }
}
