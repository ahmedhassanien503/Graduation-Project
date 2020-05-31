<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Season;

class SeasonController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $seasons = Season::paginate(5);
        // $seasons = Season::all();
    
        return view('seasons.index', [
            'seasons' => $seasons,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('seasons.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $season = Season::create([
            'SeasonName' =>$request->name
        ]);
        return redirect()->route('seasons.index');
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
        $seasonId = $request->season;

       
        $season = Season::find($seasonId);
       
        
        return view('seasons.show',[
            'season' => $season,            
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $request = request();
        $seasonId = $request->season;
        $season = Season::find($seasonId);
        return view('seasons.edit',[
            'season'=>$season,
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
        $season = Season::find($id);
        $season->SeasonName= $request->name;
        $season->save();
        return redirect()->route('seasons.index');
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
        $seasonId = $request->season;
        Season::find($seasonId)->delete();
        return redirect()->route('seasons.index');
    }
}
