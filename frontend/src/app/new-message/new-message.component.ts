import { Component, OnInit } from '@angular/core';
import { WebService } from '../webservice.service';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss']
})
export class NewMessageComponent implements OnInit {

  constructor(private webService: WebService) { }

  ngOnInit(): void {
  }

}
