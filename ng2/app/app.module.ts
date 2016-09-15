import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//components
import { AppComponent } from './app.component';
import { AllEmployeeComponent } from './components/allEmployee.component';

//routing
import { routing } from './app.routing';

//services
import { AllEmployeeService } from './services/allEmployee.service';

import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

@NgModule({
  imports:      [ BrowserModule, routing, HttpModule, FormsModule ],
  declarations: [ AppComponent, AllEmployeeComponent ],
  providers:  [ AllEmployeeService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
