<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Answer;
use App\Question;
use App\User;

class AnswerController extends Controller
{
    /** 
     * show all question --> question content and user who write the question
    */
    public function index()
    {
        $answers = Answer::paginate(5);
        return view('answers.index', [
            'answers' => $answers,
        ]);
    }

    /**
     * show thw answer --> find specific answer with answer id
     */
    public function show(){
        $request=request();
        $answerId=$request->answer;
        $answer = Answer::find($answerId);
        return view('answers.show',[
            'answer'=>$answer,
        ]);
    }

    /**
     * add answer --> answer content and chef who write the answer
     */
    public function create(){
        $action =route('answer.store');
        $questions=Question::all();
        $users = User::where('is_chef','===','true')->get();
        return view('answers.create',[
            'action'=> $action,
            'users' => $users,
            'questions'=>$questions,
        ]);
    }
    public function store(Request $request){
        $answer=Answer::create([
            'answer' => $request->answer,
            'user_id' => $request->user_id,
            'question_id'=>$request->question_id,
        ]);     
        return redirect()->route('answer.index');
    }

    /**
     * delete the selected answer using answer_id
     */
    public function destroy(){
        $request=request();
        $answerId=$request->answer;
        $deleted = Answer::find($answerId)->delete();
        return redirect()->route('answer.index');
    }

    /**
     * edit the selected answer -->  answer content 
     */
    public function edit(){
        $request=request();
        $users= User::where('name','<>','admin')->get();
        $answerId=$request->answer;
        $answer = Answer::find($answerId);
        $action =route('answer.update',['answerid'=>$answerId]);
        return view('answers.create',[
            'answer'=> $answer,
            'users'=>$users,
            'action'=> $action,
        ]);
    }
    public function update(Request $request){
        $answerId=$request->answerid;
        $answer= Answer::find($answerId);
        $answer->answer = $request->answer;
        $answer->user_id = $request->user_id;
        $answer->save();
        return redirect()->route('answer.index');
    }

}
