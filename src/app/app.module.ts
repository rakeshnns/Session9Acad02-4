import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeMember } from './app.service';
import { Degreelist } from './app.select.service';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [EmployeeMember, Degreelist],
  bootstrap: [AppComponent]
})
export class AppModule { }
