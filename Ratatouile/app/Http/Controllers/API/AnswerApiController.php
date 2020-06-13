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
        $answer->chef_id = 1;
        $answer->question()->associate($questionid);
        $answer->save();
        return new AnswerResource($answer);
    }

    public function destroy($answer)
    {
        $answer=Answer::find($answer);
        $answer->delete();
    }

}
