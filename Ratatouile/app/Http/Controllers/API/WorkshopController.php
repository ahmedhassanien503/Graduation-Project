<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\ WorkshopResource;
use App\Workshop;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;


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
        
        // dd($id);

        if($request->hasFile('image'))
        {
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension(); // getting image extension
            $filename =time().'.'.$extension;
            Storage::disk('public')->put('workshops/'.$filename, File::get($file));
        } else {
            $filename = 'Picture1.jpg';
        }
        // return response()->json($request);
        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'app_deadline' => 'required',
            'no_of_applicant' => 'required',
        ]);
        $date= \Carbon\Carbon::createFromFormat( 'm-d-Y',$request->app_deadline); 
        // dd($userData[0]->id);
        $workshop= Workshop::create([
            'name' => $request->name,
            'description' =>  $request->description,
            'app_deadline' =>  $date,
            'no_of_applicant' =>  $request->no_of_applicant,
            'image'=>$filename,
            'chef_id' => $request->id,
        ]);
        return new WorkshopResource($workshop);
    }

    public function update(Request $request)
    {
        //  $id = Auth::id();
         $request->validate([
            'name' => 'required',
            'description' => 'required',
            'app_deadline' => 'required',
            'no_of_applicant' => 'required',
        ]); 

        $date= \Carbon\Carbon::createFromFormat( 'm-d-Y',$request->app_deadline); 
        $workshopId=$request->workshop;
        $workshopData=Workshop::find($workshopId);
        $image=$workshopData->image;

        if($request->hasFile('image'))
        {
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension(); // getting image extension
            $filename =time().'.'.$extension;
            Storage::disk('public')->put('workshops/'.$filename, File::get($file));
        } else {
            $filename =  $image;
        }


        $workshopData->name = $request->name;
        $workshopData->description =  $request->description;
        $workshopData->app_deadline = $date;
        $workshopData->no_of_applicant =  $request->no_of_applicant;
        $workshopData->image= $filename;
        $workshopData->chef_id = $request->id;

        $workshopData->save();
        return new WorkshopResource($workshopData);
    }

    public function Chef($chefId)
    {  
        return WorkshopResource::collection(
            Workshop::where('chef_id',$chefId)->get()
            // Workshop::paginate(4)
        ); 
    }

    public function destroy()
    {
        $request = request();
        $workshopId = $request->workshop;
        Workshop::find($workshopId)->delete();
    }
}
