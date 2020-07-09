import { User } from '../_models/user';
import { Injectable } from '@angular/core';
import { RequestOptions, Http, Headers } from '@angular/http';
import { Exam } from '../_models/exam';
import { UserService } from './user.service';
import { ExamsAssign } from '../_models/examsassign';
import { ExamService } from './exam.service';
import { Question } from '../_models/question';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class QuestionService {
  private baseUrl = 'http://localhost:8080';
  user: User;
  exam: Exam;

  headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
  options = new RequestOptions({ headers: this.headers });

  constructor(private http: HttpClient,
    private examService: ExamService,
    private userService: UserService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.userService.token
    })
  };

  createQuestion(question: Question): Observable<Question> {
    question.exam = this.examService.selectedExam;
    return this.http.post<Question>(this.baseUrl + '/question', question, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  getQuestionsByExamId(id: number): Observable<Question[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.userService.token
      })
    };
    return this.http.get<Question[]>(this.baseUrl + '/question/loadByExamId/' + id, httpOptions)
      .pipe(catchError(this.handleError));
  }

  getAllQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.baseUrl + '/question/findAll', this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  getQuestionById(id: number): Observable<Question> {
    return this.http.get<Question>(this.baseUrl + '/question/' + id,this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  updateQuestion(question: Question) {
    return this.http.put(this.baseUrl + '/question', question,this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  deleteQuestion(question: Question) {
    return this.http.delete(this.baseUrl + '/question/' + question.id,this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}