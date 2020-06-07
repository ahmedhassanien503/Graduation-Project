<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Season;
use App\Recipe;
use App\SeasonRecipe;

class SeasonalRecipeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $seasonalRecipes = SeasonRecipe::paginate(5);
        return view('seasonalrecipes.index', [
            'seasonalRecipes' => $seasonalRecipes,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $seasons=Season::all();
        $recipes=Recipe::all();
        return view('seasonalrecipes.create',[
            'seasons' =>$seasons,
            'recipes' =>$recipes,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $seasonalRecipes = SeasonRecipe::create([
            'season_id' =>$request->season_id,
            'recipe_id'=>$request->recipe_id,
        ]);
        return redirect()->route('seasonalrecipes.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        $request = request();
        $seasonalrecipeId = $request->seasonalrecipe;
        $seasonalrecipe = SeasonRecipe::find($seasonalrecipeId);
        return view('seasonalrecipes.show',[
            'seasonalrecipe' => $seasonalrecipe,            
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit()
    {

        $request = request();
        $seasonalrecipeId = $request->seasonalrecipe;
        $seasons=Season::all();
        $recipes=Recipe::all();
        $seasonalrecipe = SeasonRecipe::find($seasonalrecipeId);
        return view('seasonalrecipes.edit',[
            'seasonalrecipe'=>$seasonalrecipe,
            'seasons' =>$seasons,
            'recipes' =>$recipes,
        ]);
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $seasonalrecipe = SeasonRecipe::find($id);
        $seasonalrecipe->season_id= $request->season_id;
        $seasonalrecipe->recipe_id= $request->recipe_id;
        $seasonalrecipe->save();
        return redirect()->route('seasonalrecipes.index');
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy()
    {
        $request = request();
        $recipeId = $request->seasonalrecipe;
        SeasonRecipe::find($recipeId)->delete();
        return redirect()->route('seasonalrecipes.index');

    }
}
