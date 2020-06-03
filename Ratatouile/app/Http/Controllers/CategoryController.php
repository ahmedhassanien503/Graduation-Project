<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Illuminate\Http\Request;
use App\Category;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories=Category::paginate(10);
        return view('categories.index',["categories"=>$categories]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view ('categories.create');
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
            Storage::disk('public')->put('categories/'.$filename, File::get($file));
        } else {
            $filename = 'category.jpg';
        }
        Category::create([
          

            'created_at'=>$request->created_at,
            'updated_at'=>$request->updated_at,
            'category_name'=>$request->category_name,
            'image'=>$filename,
        
        ]);
        return redirect()->route('categories.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $request = request();
	
		$categoryId=$request->category;

		$category=Category::find($categoryId);
	

		return view('categories.show',['category'=>$category]);
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
        $categoryId=$request->category;
        $category=Category::find($categoryId);
        return view('categories.edit',[
            'category'=>$category,
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
   
        $categoryId= $request->category;
        $category=Category::find($categoryId);
        $category->category_name=$request->get('category_name');
        $category->created_at=$request->get('created_at');
        $category->updated_at=$request->get('updated_at');
        $category->image=$request->get('image');
        $category->save();
         
        return redirect('/categories');
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
        $categoryId=$request->category;
        $category=Category::find($categoryId);
        $category->delete();
        return redirect()->route('categories.index');
    }
}
