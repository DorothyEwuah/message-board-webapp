import { Component, ViewChild } from '@angular/core';
import { MessagesComponent } from './messages/messages.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  // @ViewChild(MessagesComponent)
  // messages!: MessagesComponent;

// onPosted(message: any){
//   this.messages.messages?.push(message);
//   console.log(message);
// }

}

