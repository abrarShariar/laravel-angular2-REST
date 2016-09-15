import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//components
import { AppComponent } from './app.component';
import { AllEmployeeComponent } from './components/allEmployee.component';

//routing
import { routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule,routing ],
  declarations: [ AppComponent,AllEmployeeComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
