<?php

namespace App\Http\Controllers\API;
// namespace App\Http\Controllers\API\DB;

use App\Http\Controllers\API\json;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use App\Http\Resources\ChefResource;
use Illuminate\Support\Facades\DB;
use App\Recipe;
use App\Http\Resources\ResipeResource;
use Illuminate\Http\Resources\Json\Resource;





use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
class ChefController extends Controller
{
    public function index(){
        return ChefResource::collection(
            User::where('is_chef',true)->get()
        );
    }

    public function indexx(){
        return ChefResource::collection(
            User::where('is_chef',true)->paginate(8)
        );
    }

    public function show($chef){
        // return new ChefResource(
        //     User::find($chef)
        // );

        $users =  User::find($chef);
        $recipes=Recipe::where('user_id',$chef)->get();
        $recipeResource=ResipeResource::collection($recipes);
        return ([
        'users' => new ChefResource($users),
        'recipes' =>$recipeResource,
        ]);
    }
     
    public function recipes($chefid){
        $chefid = DB::table('users')->where('id',$chefid)->value('id');
        $recipes=Recipe::where('user_id',$chefid)->get();
        $recipeResource=ResipeResource::collection($recipes);
        return $recipeResource;

    }

    public function edit($id){
        $request = request();
        $chef = User::findOrFail($id);

        if($request->hasFile('image'))
        {
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension(); // getting image extension
            $filename =time().'.'.$extension;
            // storeas('chef',,public)
            // $path=Storage::disk('public')->put('uploads/chef/'.$filename, File::get($file));
            // $file->move('uploads/chef/', $filename);
            // $chef->image = $filename;
            $path = $request->file('image')->storeAs( 'chef',$filename,'public' );//$request->user()->id
        }
        else {
            $filename = 'chef.jpg';
        }//php artisan storage:link
        // $chef->update($request->all());
        
        // return $chef;
        // dd($chef);
        
        // $chef->name = $request->input('name');
        // $chef->work_place = $request->input('work_place');
        // $chef->image=$filename;
        // $chef->save();
        $chef->name=$request->name;
        $chef->work_place=$request->work_place;
        $chef->image=$path;
        $chef->save();
        
        return new ChefResource($chef);
    }
    
}
