import { Component, OnInit } from '@angular/core';
import { WebService } from '../webservice.service';
import { Message } from '../messagesModel';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss'],
})
export class NewMessageComponent implements OnInit {
  constructor(private webService: WebService) {}
  message: Message = new Message;
  messageRes:any;
  ngOnInit(): void {
  }

  post(){
    console.log(this.message)
    this.webService.postMessage(this.message).subscribe(res=>{
      this.messageRes = res;
      console.log(this.message)
    });
   
  }
}