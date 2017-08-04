<?php

namespace App\Http\Controllers;

use App\User;
use Validator;
use Illuminate\Http\Request;

class AuthController extends Controller
{
   public function signup (Request $request){
      // validate request 
      $validator = Validator::make($request->all(),[
            'name' => 'required|string|max:255',
            'organization_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
         ]);

      // if there are errors
      if ($validator->fails()) {
            // return the request and errors
            return array(
                    'data' => request()->all(),
                    'errors' => $validator->errors()->all(),
                );
        }
      
      // if no errors add the new user
      $user = new User;
      $user->name = $request->name;
      $user->organization_name = $request->organization_name;
      $user->email = $request->email;
      $user->password = bcrypt($request->password);

      $user->save();
      return "success";
   }

   public function logout (Request $request){
    return "logging out";
   }

}
