<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }

    public function cleaner()
    {
        return view('cleaner');
    }

    public function admin()
    {
        return view('admin');
    }

    public function goToEditProfile()
    {
        return view('editProfile');
    }

    public function EditProfile(Request $request)
    {
        User::where('id', Auth::user()->id)
            ->update(['email' => $request['email'],
                    'name' => $request['name']]);
        return redirect('/home');
    }

    /*
     * Функция перехода на страницу изменения пароля
     */
    public function goToEditPassword()
    {
        return view('editPassword');
    }

    /*
     * Функция изменения пароля по id пользователя. Hash:make - хеширует пароль
     */
    public function EditPassword(Request $request)
    {
        User::where('id', Auth::user()->id)
            ->update(['password' => Hash::make($request['password'])]);
        return redirect('/home');
    }
}
