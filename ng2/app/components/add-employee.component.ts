
import { Component } from '@angular/core';
import { AddEmployeeService } from '../services/add-employee.service';


class newEmployee{
    firstname:string;
    lastname:string;
    DOB:any;
    desc:string;
}
@Component({
    selector: 'add-employee',
    templateUrl: './app/templates/add-employee.component.html'
})
export class AddEmployeeComponent{

    fname:string;
    lname:string;
    DOB:any;
    desc:string;
    response:any;
    errorMessage:any;

     constructor(private employeeService:AddEmployeeService){}

     //on form submit
     onSubmit(){
       console.log("Submitted Form");
     }

    addNewEmployee(){
      if(this.fname && this.lname){
        let employee = new newEmployee();
        employee.firstname = this.fname;
        employee.lastname = this.lname;
        employee.DOB = this.DOB;
        employee.desc = this.desc;

          this.addNewEmployee(employee);
        }
    }

    //add new employee using employeeService
    addNewEmployee(employee:newEmployee){
      return this.employeeService.addNewEmployee(employee).subscribe(
          response => this.response = response,
          error => this.errorMessage = <any>error;
      );
    }

}
