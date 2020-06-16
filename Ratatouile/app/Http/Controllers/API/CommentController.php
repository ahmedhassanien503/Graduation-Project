<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Comment;
use App\Recipe;
use App\User;

use App\Http\Resources\CommentResource;
class CommentController extends Controller
{
    public function index($recipeId){
        return CommentResource::collection(
            Comment::where('recipe_id',$recipeId)->get()
        );
    }
    public function store(){
        $request = request();
        
        $comment = Comment::create([
            'content'=>$request->content,
            'recipe_id'=>$request->recipe_id,
            'user_id'=> $request->user,
        ]);
        // $comment->save();
        // $comment= Comment::create($request->all());
        return new CommentResource($comment);
    }
    public function update($id){
        $request = request();
        // $user=Auth::user();
        // $recipeId=
        $comment = Comment::find($id);
        $comment->content=$request->content;
        $comment->save();
        
        return new CommentResource($comment);
    }
    public function show($id){
        return new CommentResource(
            Comment::find($id)
        );
    }
    public function destroy($commentId)
    {
        $request = request();
        $commentId = $request->comment;
        Comment::find($commentId)->delete();
        // return redirect()->route('recipes.comments.index');
    }
}
