import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WebService } from '../webservice.service';
import { Message } from '../messagesModel';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss'],
})
export class NewMessageComponent implements OnInit {
  // @Output() onPosted = new EventEmitter();

  constructor(private webService: WebService) {}
  message: Message = new Message;
  messageRes:any;
  
  ngOnInit(): void {
  }

  post(){
    this.webService.postMessage(this.message);
    console.log(this.message);
    // this.webService.postMessage(this.message).subscribe(res=>{
    //   this.messageRes = JSON.stringify(res);
    //   // console.log(JSON.parse(this.messageRes));
    //   this.onPosted.emit(this.message);
      
    // }
    // ,
    // (error:any) => {
    //   console.log(error)
    // }
    // );
   
  }
}
