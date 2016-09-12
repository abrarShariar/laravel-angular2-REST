<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class EmployeeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //insert test data into employee table (testDB)

        DB::table('employee')->insert([
            'firstname' => 'Charles',
            'lastname' => 'Xavier',
            'DOB' => '1990-01-01',
            'description' => 'Created school for gifted youths'
        ]);

        DB::table('employee')->insert([
            'firstname' => 'Tom',
            'lastname' => 'Hanks',
            'DOB' => '1980-06-02',
            'description' => 'A hard working actor'
        ]);

        DB::table('employee')->insert([
            'firstname' => 'Bill',
            'lastname' => 'Gates',
            'DOB' => '1980-01-01',
            'description' => 'The Billionare'
        ]);
    }
}
