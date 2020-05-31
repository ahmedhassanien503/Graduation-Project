<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Question;
use App\User;

class QuestionController extends Controller
{
    /** 
     * show all question --> question content and user who write the question
    */
    public function index()
    {
        $questions = Question::paginate(5);
        return view('questions.index', [
            'questions' => $questions,
        ]);
    }

    /**
     * show thw question --> find specific question with question id
     */
    public function show(){

        $request=request();
        $questionId=$request->question;
        $question = Question::find($questionId);

        return view('questions.show',[
            'question'=>$question,
        ]);
    }

    /**
     * add question --> question content and user who write the question
     */
    public function create(){
        $action =route('question.store');
        $users = User::all();
        return view('questions.create',[
            'action'=> $action,
            'users' => $users,
        ]);
    }
    public function store(Request $request){
        $question=Question::create([
            'question' => $request->question,
            'user_id' => $request->user_id,
        ]);     
        return redirect()->route('question.index');
    }

    /**
     * delete the selected question using question_id
     */
    public function destroy(){
        $request=request();
        $questionId=$request->question;
        $deleted = Question::find($questionId)->delete();
        return redirect()->route('question.index');
    }

    /**
     * edit the selected question -->  question content 
     */
    public function edit(){
        $request=request();
        $users= User::where('name','<>','admin')->get();
        $questionId=$request->question;
        $question = Question::find($questionId);
        $action =route('question.update',['questionid'=>$questionId]);
        return view('questions.create',[
            'question'=> $question,
            'users'=>$users,
            'action'=> $action,
        ]);
    }
    public function update(Request $request){
        $questionId=$request->questionid;
        $question= Question::find($questionId);
        $question->question = $request->question;
        $question->user_id = $request->user_id;
        $question->save();
        return redirect()->route('question.index');
    }

}
