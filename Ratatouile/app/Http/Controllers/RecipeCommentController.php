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
