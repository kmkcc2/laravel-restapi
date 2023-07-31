<?php

namespace App\Http\Controllers;

use App\Http\Requests\V1\StoreUserRequest;
use App\Http\Resources\V1\UserResource;
use App\Models\User;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    public function store(StoreUserRequest $request){
        return new UserResource(User::create($request->all()));
    }
}
