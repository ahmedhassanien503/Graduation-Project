<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Workshop;
use App\User;
class WorkshopController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $workshops = Workshop::paginate(5);
        return view('workshops.index', [
            'workshops' => $workshops,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

        $chefs = User::where('is_chef','1')->get();
        return view('workshops.create',[
            'chefs' =>$chefs,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if($request->hasFile('image'))
        {
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension(); // getting image extension
            $filename =time().'.'.$extension;
            Storage::disk('public')->put('workshops/'.$filename, File::get($file));
        } else {
            $filename = 'workshop.jpg';
        }

    

        $workshop= Workshop::create(
            [
            'name' => $request->name,
            'description' =>  $request->description,
            'app_deadline' =>$request->app_deadline,
            'no_of_applicant'=> $request->no_of_applicant,
            'chef_id'=> $request->chef_id,
            'image'=>$filename,
        ]);

        return redirect()->route('workshops.index');

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        $request = request();
        $workshopId = $request->workshop;

       
        $workshop = Workshop::find($workshopId);
        $chefs = User::where('is_chef','1')->get();
        
        return view('workshops.show',[
            'workshop' => $workshop,
            'chefs'=>$chefs,
            
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit()
    {
        $request = request();
        $workshopId = $request->workshop;
        $workshop = Workshop::find($workshopId);
        $chefs = User::where('is_chef','1')->get();

        return view('workshops.edit',[
            'workshop'=>$workshop,
            'chefs'=>$chefs,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        // if($request->hasFile('image'))
        // {
        //     $file = $request->file('image');
        //     $extension = $file->getClientOriginalExtension(); // getting image extension
        //     $filename =time().'.'.$extension;
        //     Storage::disk('public')->put('workshops/'.$filename, File::get($file));
        // } else {
        //     $filename = 'workshop.jpg';
        // }

        $workshop = Workshop::find($id);
        $workshop->name= $request->name;
        $workshop->description = $request->description;
        $workshop->app_deadline= $request->app_deadline;
        $workshop->no_of_applicant = $request->no_of_applicant;
        $chefs = User::where('is_chef','1')->get();
        // $workshop->image= $request->filename;
       
        $workshop->save();
        return redirect()->route('workshops.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy()
    {
        $request = request();
        $workshopId = $request->workshop;
        Workshop::find($workshopId)->delete();
        return redirect()->route('workshops.index');
    }
}
