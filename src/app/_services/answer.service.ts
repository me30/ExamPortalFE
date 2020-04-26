import { User } from '../_models/user';
import { Injectable } from '@angular/core';
import { RequestOptions, Http, Headers } from '@angular/http';
import { Exam } from '../_models/exam';
import { UserService } from './user.service';
import { Answer } from '../_models/answer';


@Injectable()
export class AnswerService {
  private baseUrl = 'http://localhost:8080';

  headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
  options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http,
    private userService: UserService) { }

    addAnswer(answer: Answer): Promise<Exam> {
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.userService.token
          });
        return this.http.post(this.baseUrl + '/answer', answer,{ headers: headers })
          .toPromise().then(response => response.json() as Answer)
          .catch(this.handleError);
      }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}