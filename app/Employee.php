<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    /*
    * The table assocaiated with the model
    *
    */
    protected $table = 'employee';
    //mass-assignment issue
    protected $fillable = ['firstname','lastname','DOB','description'];
}
