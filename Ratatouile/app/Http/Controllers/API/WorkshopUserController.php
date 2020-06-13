<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Illuminate\Http\Request;
use App\Http\Resources\ WorkshopUserResource;
use App\WorkshopUser;
use Illuminate\Support\Facades\Auth;

class WorkshopUserController extends Controller
{
      /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
    */
    public function index()
    {
        return WorkshopUserResource::collection(
            WorkshopUser::all()
            // Workshop::paginate(4)
        ); 
    }
    public function workshopUsers($workshopId)
    {
        return WorkshopUserResource::collection(
            WorkshopUser::where('workshop_id',$workshopId)->get()
            // Workshop::paginate(4)
        );

    }

    public function show($workshopUser){

        // return WorkshopUserResource::collection(
        //     WorkshopUser::where('email',$workshopUser)->get()
        //     // Workshop::paginate(4)
        // );
        return  WorkshopUser::find($workshopUser)
            ?new WorkshopUserResource(
                WorkshopUser::find($workshopUser)
            ) : 'does not exist';
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
         //  $id = Auth::id();
        $request->validate([
            'user_id' => 'required',
            'workshop_id' => 'required',
        ]);

        $applicant= WorkshopUser::create([
            'user_id' => $request->user_id,
            'workshop_id' =>  $request->workshop_id,
        ]);
        return new WorkshopUserResource($applicant);
    }

    public function accept()
    {
        $request = request();
        $applicantId = $request->applicant;
        $applicant = WorkshopUser::find($applicantId);
        $applicant->update([
            'is_accepted' => '1'
        ]);
        $applicant->save();
        return new WorkshopUserResource($applicant);     
    }

    
    public function reject()
    {
        $request = request();
        $applicantId = $request->applicant;
        
            $applicant = WorkshopUser::find($applicantId);
            if ($applicant->is_accepted){
                $applicant->update([
                    'is_accepted' => "0"
                ]);
                $applicant->save();
            }
        return new WorkshopUserResource($applicant);  
  
    }

}
