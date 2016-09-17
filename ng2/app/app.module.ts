import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
//components
import { AppComponent } from './app.component';
import { AllEmployeeComponent } from './components/allEmployee.component';
import { SearchEmployeeComponent } from './components/search-employee.component';
import { AddEmployeeComponent } from './components/add-employee.component';
//routing
import { routing } from './app.routing';
//services
import { AllEmployeeService } from './services/allEmployee.service';
import { SearchService } from './services/search.service';
import { AddEmployeeService } from './services/add-employee.service';


@NgModule({
  imports:      [ BrowserModule, routing, HttpModule, FormsModule ],
  declarations: [ AppComponent, AllEmployeeComponent, SearchEmployeeComponent, AddEmployeeComponent ],
  providers:  [ AllEmployeeService, SearchService, AddEmployeeService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
