<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\WorkshopUser;
use App\Workshop;
use App\User;

class WorkshopUsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
        $applicants = WorkshopUser::paginate(5);
        return view('applicants.index', [
            'applicants' => $applicants,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $workshops = Workshop::all();
        $users = User::all();
        return view('applicants.create', [
            'workshops' => $workshops,
            'users' => $users,
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
        $applicant= WorkshopUser::create(
            [
            'user_id' => $request->user_id,
            'workshop_id' =>  $request->workshop_id,
        ]);
        return redirect()->route('applicants.index');
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
        $applicantId = $request->applicant;
        $applicant = WorkshopUser::find($applicantId); 
        return view('applicants.show',[
            'applicant' => $applicant,
        ]);
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
        $applicantId = $request->applicant;
        WorkshopUser::find($applicantId)->delete();
        return redirect()->route('applicants.index');
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
        return redirect()->back();
          
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
            return redirect()->back();
  
    }




}
