import { Injectable } from '@angular/core';
import { Exam } from '../_models/exam';
import { UserService } from './user.service';
import { Answer } from '../_models/answer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class AnswerService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient,
    private userService: UserService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.userService.token
    })
  };

  addAnswer(answer: Answer): Observable<Exam> {
    return this.http.post<Exam>(this.baseUrl + '/answer', answer, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}