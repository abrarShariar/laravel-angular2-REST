//router shits
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import components
import { AppComponent } from './app.component';
import { AllEmployeeComponent } from './components/allEmployee.component';
import { SearchEmployeeComponent } from './components/search-employee.component'; 


const appRoutes: Routes = [
  {
    path: 'employee/all',
    component: AllEmployeeComponent
  },
  {
    path: 'search',
    component: SearchEmployeeComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
