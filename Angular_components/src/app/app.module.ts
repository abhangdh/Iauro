import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import{ MatAutocompleteModule }from '@angular/material/autocomplete';
import { MatNativeDateModule } from '@angular/material/core';
import{ HttpClientModule} from '@angular/common/http';
import { MatSelectModule} from '@angular/material/select';
import{ MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    HttpClientModule,
    MatSelectModule,
    MatSlideToggleModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
