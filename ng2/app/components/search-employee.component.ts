
import { Component,OnInit,DoCheck,OnChanges, Input } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
    selector: 'search-box',
    templateUrl: './app/templates/search-employee.component.html'
})
export class SearchEmployeeComponent{

    employeeId:number;
    response:any;
    errorMessage:any;
    hasDumped:boolean = false;
    prevEmployeeId:number;
    prevApiUrl:string = "";
    apiUrl:string = "http://localhost:8000/api/show/id=";
    prevResponse:any;

    //initialize service
    constructor(private searchService:SearchService){}

    //search for the id
    ngDoCheck(){
      if(this.employeeId != this.prevEmployeeId){
          //console.log(this.employeeId);
          this.apiUrl = this.apiUrl + this.employeeId;

          if(this.apiUrl != this.prevApiUrl){
              this.hasDumped = true;
          }else{
              this.hasDumped = false;
          }
          if(this.hasDumped){
            // console.log(this.apiUrl);
            // console.log(this.response);
            this.getEmployeeData(this.apiUrl);
            this.hasDumped = false;
            this.prevApiUrl = this.apiUrl;
          }
        }
        if(this.response != this.prevResponse){
          console.log(this.response);
          this.prevResponse = this.response;
        }
        this.apiUrl = "http://localhost:8000/api/show/id=";
        this.prevEmployeeId = this.employeeId;
    }


    //get employee data from SearchService
    getEmployeeData(url:string){
        return this.searchService.getData(url).subscribe(
                  response => this.response = response,
                  error => this.errorMessage = <any>error
        );
    }

}
