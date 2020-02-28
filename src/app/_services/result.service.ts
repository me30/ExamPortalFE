import { User } from '../_models/user';
import { Injectable } from '@angular/core';
import { RequestOptions, Http, Headers } from '@angular/http';
import { Exam } from '../_models/exam';
import { UserService } from './user.service';
import { Result } from '../_models/result';


@Injectable()
export class ResultService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: Http,
    private userService: UserService) { }

  addResult(result: Result): Promise<Result> {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.userService.token
    });
    return this.http.post(this.baseUrl + '/result', result, { headers: headers })
      .toPromise().then(response => response.json() as Result)
      .catch(this.handleError);
  }

  getResultByExamIdAndUserId(exam_id:number,user_id:number): Promise<Result> {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.userService.token
    });
    return this.http.get(this.baseUrl + '/result/getresult/' + exam_id + '/' + user_id, { headers: headers })
      .toPromise()
      .then(response => response.json() as Result);
  }

  private handleError(error: any): Promise<Result> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}