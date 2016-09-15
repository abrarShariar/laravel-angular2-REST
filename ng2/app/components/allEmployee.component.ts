
import {Component, OnInit, DoCheck} from '@angular/core';
import { AllEmployeeService } from '../services/allEmployee.service';
import { Employee } from './Employee';


@Component({
  selector: 'all-employee',
  templateUrl: './app/templates/allEmployee.component.html'
})
export class AllEmployeeComponent implements OnInit{

    public employeeList:Employee[] = [];

    title:string = "All Employee Data";
    response:any;
    errorMessage:any;
    hasDumped:boolean = false;

    constructor(private employeeService:AllEmployeeService){

    }

    ngOnInit(){
      this.getAllEmployeeData();
    }

    ngDoCheck(){
      if(this.response && !this.haDumped){
          this.setEmployeeList(this.response);
          this.hasDumped = true;
          //console.log(this.employeeList);
      }
    }
    //get all employee data from AllEmployeeService
    getAllEmployeeData(){
        return this.employeeService.getAllData()
                                  .subscribe(
                                    response => this.response=response,
                                    error => this.errorMessage = <any>error
                                  );
    }

    //set data in employeeList
    setEmployeeList(data:any){

        for(var i=0;i < data.length;i++){
            let box=data[i];
            let info = new Employee();

            info.firstname = box.firstname;
            info.lastname = box.lastname;
            info.id = box.id;
            info.DOB = box.DOB;
            info.description = box.description;

            this.employeeList.push(info);
        }
    }

}
