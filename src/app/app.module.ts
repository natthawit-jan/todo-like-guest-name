import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuestCardComponent } from './guest-card/guest-card.component';


@NgModule({
  declarations: [
    AppComponent,
    GuestCardComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
