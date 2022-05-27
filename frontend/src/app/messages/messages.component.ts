import { Component, OnInit } from '@angular/core';
import { WebService } from '../webservice.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  messages = [
    {
      text: 'some text',
      owner: 'Tim'
    },
    {
      text: 'other text',
      owner: 'Ella'
    }
  ];
  
  constructor(private webService:WebService) { }

  async ngOnInit() {
    let response = await this.webService.getMessages();
    // this.messages = response.json();
    console.log(response);
  }

}
