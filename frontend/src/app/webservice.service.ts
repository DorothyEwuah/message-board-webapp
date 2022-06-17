import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Message } from './messagesModel';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebService {
  baseUrl = 'http://localhost:1234/api/';
  private messages: any = [];
  messageSubject = new Subject();

  private httpHeaders = new HttpHeaders().set(
    'Content-Type',
    'application/json'
  );
  // .set('Access-Control-Allow-Origin', '*')
  // .set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT')
  // .set(
  //   'Access-Control-Allow-Headers',
  //   'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  // )
  // .set('Cache-Control', 'no-cache');

  constructor(private http: HttpClient, private snackbar: MatSnackBar) {
    // this.getMessages();
  }

  private options = {
    headers: this.httpHeaders,
  };


  /**
   * 
   * @param user 
   * connecting to an API using async await
   */
  // async getMessages(user: any) {
    
  //   try {
  //     user = (user) ? '/' + user : '';
  //     let response = await this.http
  //       .get<Message[]>(`${this.baseUrl}messages` + user)
  //       .toPromise();
  //     // console.log(response);
  //     this.messages = response;
  //     console.log(this.messages);
  //     // return this.messages;
  //   } catch (error) {
  //     this.handleError('Unable to get messages');
  //   }
  // }

  getMessages(user: any) {
    
   
      user = (user) ? '/' + user : '';
     this.http
        .get<Message[]>(`${this.baseUrl}messages` + user).subscribe(response=>{
          this.messages = response;
          this.messageSubject.next(this.messages);
          console.log(this.messages);
        },error=>{
          this.handleError('Unable to get messages');
        }
        );
  }

  async postMessage(message: any) {
    try {
      let response = await this.http
        .post<Message>(`${this.baseUrl}message`, message, {
          ...this.options,
          responseType: 'json',
        })
        .toPromise();
      this.messages.push(response);
      console.log(this.messages);
      // return response;
    } catch (error) {
      this.handleError('Unable to post messages');
    }
  }

  private handleError(error: any) {
    this.snackbar.open(error, 'close', { duration: 2000 });
    console.error(error);
  }
}
