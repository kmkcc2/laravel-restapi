<?php

namespace App\Http\Controllers;

use App\Http\Requests\V1\LoginUserRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    public function login(LoginUserRequest $request)
    {
        // $user = DB::table('users')->where('email', $request->email)->get()[0] ?? null;
        // if ($user && ($user->email == $request->email && Hash::check($request->password, $user->password))) {
        //     return [
        //         'auth_token' => $this->generateToken()
        //     ];
        // } else {
        //     return [
        //         'message' => 'invalid email or password'
        //     ];
        // }
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = Auth::user();
            if ($user instanceof \App\Models\User) {
                $success['token'] =  $user->createToken('MyApp')->plainTextToken;
                $success['role'] = $user->role;
                $success['name'] =  $user->name;
                $success['email'] =  $user->email;
                return response()->json($success, 200);
            } else {
                return response([
                    'message' => 'user is not an instance of User model',
                    'error' => 'internal server error'
                ], 500);
            }
        } else {
            return response()->json([
                'message' => 'invalid email and/or password',
                'error' => 'unauthorized'
            ], 401);
        }
    }

    public function logout(Request $request){
        $request->user()->currentAccessToken()->delete();
        return[
            'message' => 'user logged out'
        ];
    }
}
