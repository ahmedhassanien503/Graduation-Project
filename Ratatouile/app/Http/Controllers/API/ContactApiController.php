<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Contact;

class ContactApiController extends Controller
{


    public function index()
    {
        $contacts=Contact::all();
        //  return view('recipes.index',["recipes"=>$recipes]);
         return response()->json($contacts,200);

    }
    public function store(Request $request){


        $contact= new Contact;

        $contact->created_at =$request->created_at;
        $contact->updated_at=$request->updated_at;
        $contact->name =$request->name;
        $contact->email=$request->email;
        $contact->message=$request->message;
      
        $contact->save();
        return response()->json($contact,201);

        } 
}
