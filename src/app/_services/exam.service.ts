import { User } from '../_models/user';
import { Injectable } from '@angular/core';
import { RequestOptions, Http, Headers } from '@angular/http';
import { Exam } from '../_models/exam';
import { UserService } from './user.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ExamService {
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

  createExam(exam: Exam): Observable<Exam> {
    exam.createdBy = this.userService.user;
    exam.createdDate = Date.now();
    return this.http.post<Exam>(this.baseUrl + '/exam', exam, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  getExams(): Observable<Exam[]> {
    return this.http.get<Exam[]>(this.baseUrl + '/exam/findAll', this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  getExamById(id: number): Observable<Exam> {
    return this.http.get<Exam>(this.baseUrl + '/exam/' + id, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  deleteExam(exam: Exam) {
    return this.http.delete(this.baseUrl + '/exam/' + exam.id, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  updateExam(exam: Exam) {
    exam.createdBy = this.userService.user;
    exam.createdDate = Date.now();
    return this.http.put(this.baseUrl + '/exam', exam, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  //Store Selected exam for questions
  addExam(exam: Exam) {
    return this.selectedExam = exam;
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}