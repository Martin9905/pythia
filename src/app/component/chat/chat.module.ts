import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatComponent } from './chat.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [HttpClientModule],
  exports: [ChatComponent]
})
export class ChatModule { }
