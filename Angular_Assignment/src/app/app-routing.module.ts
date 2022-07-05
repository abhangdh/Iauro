import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: 'header',component: HeaderComponent},
  { path: 'employee', component: EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [HeaderComponent, EmployeeComponent ]
