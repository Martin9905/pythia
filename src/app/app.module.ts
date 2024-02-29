import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [ AppComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ], 
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
