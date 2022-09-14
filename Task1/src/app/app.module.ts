import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeComponent } from './employee/employee.component';
import{ MatCardModule} from '@angular/material/card';
import{MatToolbarModule} from '@angular/material/toolbar';
import {  MatIconModule} from "@angular/material/icon";
import {  MatDialogModule} from "@angular/material/dialog";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmpListComponent } from './emp-list/emp-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmpListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
