<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\AnswerResource;
use App\Answer;
use App\Question;

class AnswerApiController extends Controller
{

    public function store(Request $request,$question)
    {
       
        $request->validate([
            'answer' => 'required', 
        ]);
        $questionid= Question::find($question);

        $answer= new Answer();

        $answer->answer = $request->answer;
        $answer->chef_id = $request->chef_id;
        $answer->question()->associate($questionid);
        $answer->save();
        return new AnswerResource($answer);
    }

    public function destroy($answer)
    {
        $answer=Answer::find($answer);
        $answer->delete();
    }

    public function update(Request $request)
    {
        $request->validate([
            'answer' => 'required', 
        ]);
        $answerId=$request->answerid;
        $answerdata = Answer::find($answerId);
        $answerdata->answer=$request->answer;
        $answerdata->chef_id=$request->chef_id;
        // $answerdata->chef_id="1";
        $answerdata->save();      
        return new AnswerResource($answerdata);
       
    }

    public function show($answer)
    {
        return  Answer::find($answer) ?new AnswerResource(Answer::find($answer)) : 'does not exist';
    }


}
