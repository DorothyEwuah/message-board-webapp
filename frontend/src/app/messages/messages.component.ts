import { Component, OnInit } from '@angular/core';
import { WebService } from '../webservice.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {

  constructor(private webService: WebService) {}

  async ngOnInit() {
    var response = await this.webService.getMessages();
    this.messages = response;
    console.log(response);
  }

  messages = [];
}
