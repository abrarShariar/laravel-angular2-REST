<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Employee;

class EmployeeController extends Controller
{
    public $employeeList;
    //fethning all data
    public function __construct(){
        $this->employeeList = Employee::all();
      }
    /**
     * Display a listing of all data
     * @return back all data in JSON
     */
    public function index()
    {
          return response()->json($this->employeeList);
    }

    /**
     * create a new
     *
     * @return JSON Response
     * @param  \Illuminate\Http\Request  $request
     *
     */
    public function store(Request $request)
    {
        //store a new employee data in DB
        Employee::create([
          'firstname' => 'Steve',
          'lastname' => 'Jobs',
          'DOB' => '1990-01-01',
          'description' => 'Apple is the game',
        ]);
        return response()->json(array('success' => 'true'));
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
