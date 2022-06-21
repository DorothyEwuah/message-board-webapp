import { Component, OnInit } from '@angular/core';
import { WebService } from '../webservice.service';
import { Message } from '../messagesModel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  response: any;
  messages:any;

  constructor(
    public webService: WebService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    let name = this.activatedRoute.snapshot.params['name'];
    this.webService.getMessages(name);
    console.log(this.messages)
    this.webService.messages.subscribe(messages=>{
      this.messages = messages;
      console.log(this.messages)
    })

    //  let response = await this.webService.getMessages();

    //  this.webService.getMessages().subscribe(res => {
    //    this.messages = res;
    //   //  console.log(this.messages);
    //  })
    // this.messages = response;
  }
}
