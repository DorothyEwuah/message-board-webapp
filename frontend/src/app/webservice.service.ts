import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from './messagesModel';

@Injectable({
  providedIn: 'root',
})
export class WebService {
  baseUrl = 'http://localhost:1234/api/';

  private httpHeaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    // .set('Access-Control-Allow-Origin', '*')
    // .set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT')
    // .set(
    //   'Access-Control-Allow-Headers',
    //   'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    // )
    // .set('Cache-Control', 'no-cache');

  constructor(private http: HttpClient) {}

  private options = {
    headers: this.httpHeaders,
  };

  getMessages(): Observable<Message[]> {
    let response = this.http.get<Message[]>(`${this.baseUrl}messages`);
    // console.log(response)
    return response;
  }

  postMessage(message: any) {
    let response = this.http.post(
      `${this.baseUrl}message`,
      message,
      { ...this.options, responseType: 'text' }
    );
    console.log(response);
    return response;
  }
}
