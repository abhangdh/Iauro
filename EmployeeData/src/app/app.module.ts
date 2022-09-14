import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './interaction/child/child.component';
import { InteractionComponent } from './interaction/interaction.component';
import { ParentChildComponent } from './interaction/parent-child/parent-child.component';

const routes: Routes =[{
  path:'',component: ParentChildComponent
}];
@NgModule({
  declarations: [
    AppComponent,
    InteractionComponent,
    ParentChildComponent,
    ChildComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[RouterModule]
  
})
export class AppModule { }
