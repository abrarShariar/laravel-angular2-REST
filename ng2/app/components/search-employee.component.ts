
import { Component,OnInit,DoCheck } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
    selector: 'search-box',
    templateUrl: './app/templates/search-employee.component.html'
})
export class SearchEmployeeComponent{

    employeeId:number;

    //search for the id
    ngDoCheck(){
      if(this.employeeId){
          // console.log(this.employeeId);

      }
    }


}
