<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;

//using model
use App\Employee;

class MainController extends Controller
{
    public function index(){
        return "<h1>Laravel with Angular 2 REST</h1>";
    }

    //form using laravel 5.3
    public function create(){
        $allEmployee = Employee::all()->sortByDesc('id');       //order by id DESC
        return view('pages/createForm',compact('allEmployee'));
    }

    //store data after form submission
    public function store(Request $request){

        $employee = new Employee;
        $employee->firstname = $request->fname;
        $employee->lastname = $request->lname;
        $employee->DOB = $request->dob;
        $employee->description = $request->desc;

        //save data
        $employee->save();
        //return back
        return redirect()->to('/create');
    }
}
