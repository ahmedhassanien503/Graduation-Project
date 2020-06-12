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
use App\Category;
use Illuminate\Support\Facades\DB; 
// use App\Http\Controllers\API\Builder;
use Illuminate\Database\Eloquent\Builder;


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


    //  $data=DB::table('recipes')->join('users','recipes.user_id','users.id')->where('users.is_chef',1)
    //  ->get();
    
    $recipes =Recipe::whereHas('user', function (Builder $query) { $query->whereIsChef(1); })->get();

    $recipeResource=ResipeResource::collection($recipes);
      return $recipeResource;


     
    }

    public function indexxx()
    {
 
    $recipes =Recipe::whereHas('user', function (Builder $query) { $query->whereIsChef(1); })->paginate(3);

    $recipeResource=ResipeResource::collection($recipes);
      return $recipeResource;
     
    }

    // public function indexx(){
    //  $data=DB::table('recipes')->join('users','recipes.user_id','users.id')->where('users.is_chef',0)
    //  ->get();

    // $recipeResource=ResipeResource::collection($data);
    //   return $recipeResource;


     
    
    public function indexx(){
    //  $data=DB::table('recipes')->join('users','recipes.user_id','users.id')->where('users.is_chef',0)
    //  ->get();
    $recipes =Recipe::whereHas('user', function (Builder $query) { $query->whereIsChef(0); })->get();


    $recipeResource=ResipeResource::collection($recipes);
      return $recipeResource;


    
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
    // public function store(Request $request)
    // {
    //     if($request->hasFile('image'))
    //     {
    //         $file = $request->file('image');
    //         $extension = $file->getClientOriginalExtension(); 
    //         $filename =time().'.'.$extension;
    //         Storage::disk('public')->put('recipes/'.$filename, File::get($file));
    //     } else {
    //         $filename = 'recipe.jpg';
    //     }



    //     $recipes=Recipe::create([
          

    //         'created_at'=>$request->created_at,
    //         'updated_at'=>$request->updated_at,
    //         'RecipeName'=>$request->RecipeName,
    //         'details'=>$request->details,
    //         'image'=>$filename,
    //         'Serving'=>$request->Serving,
    //         'TakenTime'=>$request->TakenTime,
    //         'user_id'=>$request->user_id,
        
    //     ]);
    //    return response()->json($recipes,201);
    // }


    public function store(Request $request){

        // dd($request);
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
        // $recipe->chef_id=$request->chef_id;
        $recipe->save();

        $recipe->categories()->sync($request->categories, false);
        // Recipe::create([
        // 'created_at'=>$request- 
        // return redirect()->route('recipes.index');
        return response()->json($recipe,201);

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
            $request= request();
            $recipeId=$request->recipe;
            $recipe=Recipe::find($recipeId);
            return response()->json($recipe,200);
    
    }



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    //
    public function update(Request $request)
    {
      
        $recipeId=$request->recipe;
        $recipeInfo=Recipe::find($recipeId);
        $image=$recipeInfo->recipe_image;

        if($request->hasFile('image'))
        {
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension(); // getting image extension
            $filename =time().'.'.$extension;
            Storage::disk('public')->put('recipes/'.$filename, File::get($file));
        } else {
            $filename =  $image;
        }


        $recipeInfo->created_at = $request->created_at;
        $recipeInfo->updated_at=  $request->updated_at;
        $recipeInfo->RecipeName = $request->RecipeName;
        $recipeInfo->details =  $request->details;
        $recipeInfo->recipe_image= $filename;
        $recipeInfo->Serving = $request->Serving;
        $recipeInfo->TakenTime=  $request->TakenTime;
        $recipeInfo->user_id= $request->user_id;
        

        $recipeInfo->save();
        return new ResipeResource($recipeInfo);
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
        return response()->json(null,204);
    }
}
