import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from './messagesModel';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private http: HttpClient) { }

  getMessages(): Observable<Message[]>{
    let response = this.http.get<Message[]>('http://localhost:1234/api/messages');
    console.log(response)
    return response ;
  }
}
