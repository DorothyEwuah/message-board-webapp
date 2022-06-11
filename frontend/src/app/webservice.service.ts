import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from './messagesModel';

@Injectable({
  providedIn: 'root'
})
export class WebService {
  baseUrl = "http://localhost:1234/api/";

  constructor(private http: HttpClient) { }

  getMessages(): Observable<Message[]>{
    let response = this.http.get<Message[]>(`${this.baseUrl}messages`);
    console.log(response)
    return response ;
  }

  postMessage(message:Message){
    let response = this.http.post<Message>(`${this.baseUrl}messages`, message);
    console.log(response);
    return(response);
  }
}
