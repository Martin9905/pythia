import { CommonModule } from '@angular/common';
import { HttpClient } from  '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [ CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  @Injectable({
    providedIn:  'root'
    })


  baseURL: string = 'https://api.paymentsos.com/hackathon-ai/prompt';

  constructor(private http: HttpClient) {
  }
  messages: string[] = [];
  newMessage: string = '';
  jarvisResponse:any;
  toggle = false;

  
  sendMessage2() {
    this.toggle = !this.toggle;  
    const headers = {'Content-Type': 'application/json', 
    'private_key': '56c5c6db-0d14-4bb7-a474-1bb996baec0f',
    'app_id': 'com.payu-hackathon.pythia'}  

    var body ={
      "prompt_template": "Answer the following questions as best you can.",
      "question": this.newMessage,
      "model": {
        "stop_sequences": [],
        "name": "anthropic.claude-v2",
        "max_tokens": 300,
        "temperature": 1,
        "top_k": 250,
        "top_p": 0.999
      },
      "rag": {
        "k": 10,
        "collection": "UTSPAYU",
        "return_source_documents": false
      }
    }
    this.messages.push(this.newMessage)
    this.newMessage = '';
    this.http.post(this.baseURL, body,{'headers':headers}).subscribe(
      (response) => {
        this.jarvisResponse=response as responseJarvis
        this.messages.push(this.jarvisResponse.result);
   },
      (error) => { console.log(error); });
     
      
    }

    
  }

  export interface responseJarvis {
    question: string;
    result: string;
    source_documents: string;
    chat_history: string
  
  }
        
    
 
  


