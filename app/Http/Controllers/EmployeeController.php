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
        /*sample data input format
         Employee::create([
           'firstname' => 'Steve',
           'lastname' => 'Jobs',
           'DOB' => '1990-01-01',
           'description' => 'Apple is the game',
         ]);
         */

        //get input data
        $fname = $request->input('fname');
        $lname = $request->input('lname');
        $dob = $request->input('dob');
        $desc = $request->input('desc');

        Employee::create([
            'firstname' => $fname,
            'lastname' => $lname,
            'DOB' => $dob,
            'description' => $desc
        ]);
        return response()->json(array('success' => 'true'));
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return JSON Response
     */
    public function show($id)
    {
        //fetch a sepcific employee with id == $id
        $data = Employee::where('id',$id)->first();
        if($data == NULL){
          return 0;
        }else{
          return response()->json($data);
        }
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
    public function delete($id)
    {
        //delete a specific employee id == $id
        $res = Employee::where('id',$id)->delete();
        if($res == 0){
          return response()->json(array('success' => false));
        }else{
          return response()->json(array('success' => true));
        }
    }
}
