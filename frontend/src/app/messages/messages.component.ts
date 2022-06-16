import { Component, OnInit } from '@angular/core';
import { WebService } from '../webservice.service';
import { Message } from '../messagesModel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  response: any;
  
  constructor(public webService:WebService, private activatedRoute: ActivatedRoute) { }

  
  ngOnInit() {
 console.log(this.activatedRoute.snapshot.params['name']);
    
  //  let response = await this.webService.getMessages();

  //  this.webService.getMessages().subscribe(res => {
  //    this.messages = res;
  //   //  console.log(this.messages);
  //  })
    // this.messages = response;
   
  }
  
}
