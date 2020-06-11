<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Illuminate\Http\Request;
use App\Http\Resources\ WorkshopResource;
use App\Workshop;
use Illuminate\Support\Facades\Auth;

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

    public function store(Request $request)
    {   
   
        $id = Auth::id();
        // dd($id);
        if($request->hasFile('image'))
        {
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension(); // getting image extension
            $filename =time().'.'.$extension;
            Storage::disk('public')->put('workshops/'.$filename, File::get($file));
        } else {
            $filename = 'workshop.jpg';
        }
        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'app_deadline' => 'required',
            'no_of_applicant' => 'required',
            'image' => 'required',
        ]);
        // dd($userData[0]->id);
        $workshop= Workshop::create([
            'name' => $request->name,
            'description' =>  $request->description,
            'app_deadline' =>  $request->app_deadline,
            'no_of_applicant' =>  $request->no_of_applicant,
            'image'=>$filename,
            'chef_id' => $id,
        ]);
        return new WorkshopResource($workshop);
    }

    public function update(Request $request)
    {
         $id = Auth::id();
         $request->validate([
            'name' => 'required',
            'description' => 'required',
            'app_deadline' => 'required',
            'no_of_applicant' => 'required',
            'image' => 'required',
        ]); 
        if($request->hasFile('image'))
        {
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension(); // getting image extension
            $filename =time().'.'.$extension;
            Storage::disk('public')->put('workshops/'.$filename, File::get($file));
        } else {
            $filename = 'workshop.jpg';
        }
        
        $workshopId=$request->workshop;
        $workshopData=Workshop::find($workshopId);

        $workshopData->name = $request->name;
        $workshopData->description =  $request->description;
        $workshopData->app_deadline = $request->app_deadline;
        $workshopData->no_of_applicant =  $request->no_of_applicant;
        $workshopData->image= $filename;
        $workshopData->chef_id = $id;
        
        $workshopData->save();
        return new WorkshopResource($workshopData);
    }
}
