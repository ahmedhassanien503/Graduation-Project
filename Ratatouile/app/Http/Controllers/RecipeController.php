<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Recipe;


class RecipeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $recipes=Recipe::all();
         return view('recipes.index',["recipes"=>$recipes]);
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view ('recipes.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function store(Request $request){

        // if($request->hasFile('image'))
        // {
        //     $file = $request->file('image');
        //     $extension = $file->getClientOriginalExtension(); // getting image extension
        //     $filename =time().'.'.$extension;
        //     Storage::disk('public')->put('pharmacies/'.$filename, File::get($file));
        // } else {
        //     $filename = 'pharmacy.jpg';
        // }


        Recipe::create([
          

            'created_at'=>$request->created_at,
            'updated_at'=>$request->updated_at,
            'RecipeName'=>$request->RecipeName,
            'details'=>$request->details,
            // 'image'=>$filename,
            'serving'=>$request->Serving,
            'TakenTime'=>$request->TakenTime,
            'user_id'=>$request->user_id,
        
        ]);
        return redirect()->route('recipes.index');

    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(){

        $request = request();//global function return request object
		//dd($request->post);
		$recipeId=$request->recipe;

		$recipe=Recipe::find($recipeId);
	

		return view('recipes.show',['recipe'=>$recipe]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
            $request= request();
            $recipeId=$request->recipe;
            $recipe=Recipe::find($recipeId);
            return view('recipes.edit',[
                'recipe'=>$recipe,
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
        $request=request();
   
        $recipeId= $request->recipe;
        $recipe=Recipe::find($recipeId);
        $recipe->RecipeName=$request->get('RecipeName');
        $recipe->details=$request->get('details');
        $recipe->image=$request->get('image');
        $recipe->serving=$request->get('Serving');
        $recipe->TakenTime=$request->get('TakenTime');
        $recipe->save();
         
        return redirect('/recipes');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $request=request();
        $recipeId=$request->recipe;
        $recipe=Recipe::find($recipeId);
        $recipe->delete();
        return redirect()->route('recipes.index');
    }
}
