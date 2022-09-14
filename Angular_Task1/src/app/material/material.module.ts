import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatRadioModule,
    MatDatepickerModule,
  ],
  exports: [
    ReactiveFormsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatRadioModule,
    MatDatepickerModule,
  ],
})
export class MaterialModule {}
