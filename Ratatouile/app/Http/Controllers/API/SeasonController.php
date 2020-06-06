<?php

namespace App\Http\Controllers\API;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\SeasonResource;
use App\Http\Resources\SeasonalRecipeResource;
use App\Season;
use App\SeasonRecipe;
use App\Recipe;
class SeasonController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      $seasons = Season::all();
    //    return response()->json($seasons);
      $seasonResource= SeasonResource::collection($seasons);
      return $seasonResource;

//       return SeasonResource::collection(
//         Season::paginate(5)
// //if we need to select total pages 
// //           Post::paginate()


//     );    
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $season_id = DB::table('seasons')->where('id',$id)->value('id');
        $seasonalrecipes = SeasonRecipe::where('season_id',$season_id)->get();
        $seasonalrecipesResource= SeasonalRecipeResource::collection($seasonalrecipes);
        return $seasonalrecipesResource;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
