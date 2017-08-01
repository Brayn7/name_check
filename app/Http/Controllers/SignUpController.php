<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class SignUpController extends Controller
{
   public function signup (Request $request){

      $this->validate($request,[
            'name' => 'required|string|max:255',
            'organization_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
         ]);
   
      $user = new User;
      $user->name = $request->name;
      $user->organization_name = $request->organization_name;
      $user->email = $request->email;
      $user->password = bcrypt($request->password);

      $user->save();
      return "success";
   }

}
