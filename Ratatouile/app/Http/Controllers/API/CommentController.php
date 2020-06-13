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
    public function store($recipeId){
        $request = request();
        // $user=Auth::user();
        $comment = Comment::create([
            'content'=>$request->content,
            'recipe_id'=>$request->recipe_id,
            'user_id'=>2
        ]);
        return new CommentResource($comment);
    }
    public function update($recipeId,$comment_id){
        $request = request();
        // $user=Auth::user();
        $comment = Comment::findOrFail($comment_id);
        $comment->content=$request->content;
        $comment->recipe_id=$recipeId;
        $comment->user_id=2;
        $comment->save();
        
        return new CommentResource($comment);
    }
    public function destroy($commentId)
    {
        $request = request();
        $commentId = $request->comment;
        Comment::find($commentId)->delete();
        return redirect()->route('recipes.comments.index');
    }
}
