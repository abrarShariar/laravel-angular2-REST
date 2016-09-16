import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
//components
import { AppComponent } from './app.component';
import { AllEmployeeComponent } from './components/allEmployee.component';
import { SearchEmployeeComponent } from './components/search-employee.component';
//routing
import { routing } from './app.routing';
//services
import { AllEmployeeService } from './services/allEmployee.service';
import { SearchService } from './services/search.service';


@NgModule({
  imports:      [ BrowserModule, routing, HttpModule, FormsModule ],
  declarations: [ AppComponent, AllEmployeeComponent, SearchEmployeeComponent ],
  providers:  [ AllEmployeeService, SearchService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
