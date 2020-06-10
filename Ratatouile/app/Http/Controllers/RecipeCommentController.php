<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Comment;
use App\Recipe;
use App\User;
use Illuminate\Support\Facades\Auth;
class RecipeCommentController extends Controller
{
    // public function index($recipeId){
    //     $recipeId->recipe;
    //     $comments = Comment::all();
    //     $recipe= Recipe::find($recipeId);
    //     return view('recipes.show',[
    //         'comments'=> $comments,
    //         'recipe'=>$recipe
    //     ]);
    // }
    // public function create($recipeId){
    //     return view ('recipes.comments.create');
    // }
    // public function show(){
    //     return
    // }
    public function store(){
        $request = request();
        $comment = new Comment;
        $comment->content = $request->get('content');
        $comment->user()->associate($request->user());
        $comment->recipe_id=$request->recipe_id;
        $comment->save();
        return back();
    }
        
}
