import { Component, OnInit } from '@angular/core';
import { WebService } from '../webservice.service';
import { Message } from '../messagesModel';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  response: any;
  messages?: Message[];
  
  constructor(private webService:WebService) { }

  
  ngOnInit() {
    
  //  let response = await this.webService.getMessages();

   this.webService.getMessages().subscribe(res => {
     this.messages = res;
    //  console.log(this.messages);
   })
    // this.messages = response;
   
  }
  
}
