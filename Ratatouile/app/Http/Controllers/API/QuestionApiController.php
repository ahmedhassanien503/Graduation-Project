<?php

namespace App\Http\Controllers\API;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\QuestionResource;
use App\Question;

class QuestionApiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $questions = Question::paginate(6);
        $questionsResource= QuestionResource::collection($questions);
        return $questionsResource;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       
        $request->validate([
            'question' => 'required', 
        ]);
        $question= Question::create([
            'question' => $request->question,
            'user_id' => "1",
        ]);     
        // return response()->json($question);
        return new QuestionResource($question);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($question)
    {
        return  Question::find($question) ?new QuestionResource(Question::find($question)) : 'does not exist';
    }

 

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $request->validate([
            'question' => 'required', 
        ]);
        $questionId=$request->questionid;
        $questiondata = Question::find($questionId);
        $questiondata->question=$request->question;
        $questiondata->user_id="1";
        $questiondata->save();
       
        return new QuestionResource($questiondata);
       
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($question)
    {
        $question=Question::find($question);
        $question->delete();
    }
}
