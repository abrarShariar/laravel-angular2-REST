@extends('layout') @section('content')

<h2>Create New Employee</h2>
<br>
<br>
<hr>
<div class="col-md-6">

  <!--form to create new employee  -->
  <form class="form-horizontal" method="POST" action="/employee/store">
    <div class="form-group">
      <label for="fname" class="col-sm-2 control-label">Firstname</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="fname" name="fname" placeholder="firstname" required>
      </div>
    </div>

    <div class="form-group">
      <label for="lname" class="col-sm-2 control-label">Lastname</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="lname" name="lname" placeholder="lastname" required>
      </div>
    </div>

    <div class="form-group">
      <label for="dob" class="col-sm-2 control-label">DOB</label>
      <div class="col-sm-10">
        <input type="date" class="form-control" name="dob" id="dob">
      </div>
    </div>

    <div class="form-group">
      <label for="desc" class="col-sm-2 control-label">Description</label>
      <div class="col-sm-10">
        <textarea name="desc" rows="5" cols="42" id="desc" name="desc"></textarea>
      </div>
    </div>

    <button style="float: right;" type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>

<div class="col-md-6">
  <h3>All Employees</h3>
   @foreach($allEmployee as $employee)
  <div class="panel panel-info">
    <div class="panel-heading">
      <h3 class="panel-title">{{$employee->firstname}} {{$employee->lastname}}</h3>
    </div>
    <div class="panel-body">
        <li><em>ID: </em> {{$employee->id}}</li>
        <li><em>DOB: </em> {{$employee->DOB}}</li>
        <li><em>Description</em> {{$employee->description}}</li>
    </div>
  </div>
  @endforeach
</div>

@stop
