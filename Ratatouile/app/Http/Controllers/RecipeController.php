<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Illuminate\Http\Request;
use App\Recipe;
use App\Category;


class RecipeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $recipes=Recipe::paginate(4);
         return view('recipes.index',["recipes"=>$recipes]);
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories= Category::all();
        return view ('recipes.create',[
            'categories' =>$categories,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function store(Request $request){

        if($request->hasFile('image'))
        {
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension(); 
            $filename =time().'.'.$extension;
            Storage::disk('public')->put('recipes/'.$filename, File::get($file));
        } else {
            $filename = 'recipe.jpg';
        }



        $recipe= new Recipe;

        $recipe->created_at =$request->created_at;
        $recipe->updated_at=$request->updated_at;
        $recipe->RecipeName =$request->RecipeName;
        $recipe->details=$request->details;
        $recipe->recipe_image =$filename;
        $recipe->Serving=$request->Serving;
        $recipe->TakenTime =$request->TakenTime;
        $recipe->user_id=$request->user_id;
        $recipe->save();
        $recipe->categories()->sync($request->categories, false);
     
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
        if($request->hasFile('image'))
        {
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension();
            $filename =time().'.'.$extension;
            Storage::disk('public')->put('recipes/'.$filename, File::get($file));
            $recipe->image= $filename;
        } 
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
