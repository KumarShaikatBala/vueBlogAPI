<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{

    public function index(){
        return Category::all();

/*return $categories;*/


/*        return response()->json([
'categories'=>$categories
        ],200);*/

    }

   public function addCategory(Request $request){
       $this->validate($request,[
           'name' =>'required|string|max:255'
       ]);
       Category::create($request->all());
   }
}
