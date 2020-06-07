<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ResipeResource;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use App\User;
use App\Recipe;
use Illuminate\Support\Facades\DB; 


class RecipeApiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    // public function index()
    // {
    //     $recipes=Recipe::all();
    //   return response()->json(Recipe::get(),200);
    // }

    public function index()
    {
    //    $recipes=Recipe::all();
    //    $recipeResource=ResipeResource::collection($recipes);
    //    return $recipeResource;

    //    return UserResource::collection(
    //      User::where('is_chef',true)->get()
    //    );

    
    //    return $chefs;
    //    $recipes=Recipe::all();
    //    $chefs=User::where('is_chef',true)->get();
    //    $recipes=Recipe::where('user_id',$chefs)->get();
    //     $recipeResource=ResipeResource::collection($recipes);
    //    return $recipeResource;


   // $chefs= DB::table('users')->where('is_chef',0)->value('id'); 
     //dd($chefs);
     $data=DB::table('recipes')->join('users','recipes.user_id','users.id')->where('users.is_chef',1)
     ->get();
    

    // $re-cipes=Recipe::where('user_id' ,$chefs)->get();
  

    $recipeResource=ResipeResource::collection($data);
      return $recipeResource;


     
    }

    // public function indexx(){
    //  $data=DB::table('recipes')->join('users','recipes.user_id','users.id')->where('users.is_chef',0)
    //  ->get();

    // $recipeResource=ResipeResource::collection($data);
    //   return $recipeResource;


     
    
    public function indexx(){
     $data=DB::table('recipes')->join('users','recipes.user_id','users.id')->where('users.is_chef',0)
     ->get();

    $recipeResource=ResipeResource::collection($data);
      return $recipeResource;


    
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
       
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if($request->hasFile('image'))
        {
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension(); 
            $filename =time().'.'.$extension;
            Storage::disk('public')->put('recipes/'.$filename, File::get($file));
        } else {
            $filename = 'recipe.jpg';
        }



        $recipes=Recipe::create([
          

            'created_at'=>$request->created_at,
            'updated_at'=>$request->updated_at,
            'RecipeName'=>$request->RecipeName,
            'details'=>$request->details,
            'image'=>$filename,
            'Serving'=>$request->Serving,
            'TakenTime'=>$request->TakenTime,
            'user_id'=>$request->user_id,
            'chef_id'=>$request->chef_id,
        
        ]);
       return response()->json($recipes,201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
    return  Recipe::find($id) ?new ResipeResource(  Recipe::find($id) ) : 'does not exist';
        
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
