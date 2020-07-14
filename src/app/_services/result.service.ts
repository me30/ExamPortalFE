import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Result } from '../_models/result';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class ResultService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient,
    private userService: UserService) { }

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.userService.token
      })
    };

  addResult(result: Result): Observable<Result> {
    return this.http.post<Result>(this.baseUrl + '/result', result,this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  getResultByExamIdAndUserId(exam_id: number, user_id: number): Observable<Result> {
    return this.http.get<Result>(this.baseUrl + '/result/getresult/' + exam_id + '/' + user_id, this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  private handleError(error: any): Promise<Result> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}