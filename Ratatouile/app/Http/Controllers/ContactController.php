<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Illuminate\Http\Request;
use App\Contact;


class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $contacts = Contact::all();
 
        return view('contacts.index', [
            'contacts' => $contacts,
        ]);
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('contacts.create');
    }

    /**
     * Store a newly created resource in storage.
     *
    //  * @param  \Illuminate\Http\Request  $request
    //  * @return \Illuminate\Http\Response
     */
   
    public function store(Request $request)
    {
        $contact= new Contact;

        $contact->created_at =$request->created_at;
        $contact->updated_at=$request->updated_at;
        $contact->name =$request->name;
        $contact->email=$request->email;
        $contact->message=$request->message;

        $contact->save();
     
        return redirect()->route('contacts.index');
    }
   
    public function show(){

        $request = request();

		$contactId=$request->contact;

		$contact=Contact::find($contactId);
	

		return view('contacts.show',['contact'=>$contact]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
