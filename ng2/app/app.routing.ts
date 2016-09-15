//router shits
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import components
import { AppComponent } from './app.component';
import { AllEmployeeComponent } from './components/allEmployee.component';


const appRoutes: Routes = [
  {
    path: 'employee/all',
    component: AllEmployeeComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
