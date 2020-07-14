import { User } from '../_models/user';
import { Injectable } from '@angular/core';
import { Exam } from '../_models/exam';
import { UserService } from './user.service';
import { ExamsAssign } from '../_models/examsassign';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ExamAssignService {
  private baseUrl = 'http://localhost:8080';
  user: User;
  exam: Exam;
  selectedExam: Exam;

  constructor(private http: HttpClient,
    private userService: UserService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.userService.token
    })
  };

  examAssign(examAssign: ExamsAssign): Observable<ExamsAssign> {
    return this.http.post<ExamsAssign>(this.baseUrl + '/examAssign', examAssign, this.httpOptions)
      .pipe(catchError(this.handleError));
  }


  getExamAssignByUserId(user: User): Observable<ExamsAssign[]> {
    return this.http.get<ExamsAssign[]>(this.baseUrl + '/examAssign/getUsers/' + user.id, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  getExamAssignById(id: number): Observable<ExamsAssign> {
    return this.http.get<ExamsAssign>(this.baseUrl + '/examAssign/' + id, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  getAllExamAssign(): Observable<ExamsAssign[]> {
    return this.http.get<ExamsAssign[]>(this.baseUrl + '/examAssign/findAll', this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}