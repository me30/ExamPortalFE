import { User } from '../_models/user';
import { Injectable } from '@angular/core';
import { RequestOptions, Http, Headers } from '@angular/http';
import { Exam } from '../_models/exam';
import { UserService } from './user.service';
import { ExamsAssign } from '../_models/examsassign';
import { ExamService } from './exam.service';
import { Question } from '../_models/question';

@Injectable()
export class QuestionService {
  private baseUrl = 'http://localhost:8080';
  user: User;
  exam: Exam;

  headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
  options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http,
              private examService: ExamService,
              private userService: UserService) { }
 
   createQuestion(question: Question): Promise<Question> {
    const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.userService.token
      });
    question.exam = this.examService.selectedExam;
    return this.http.post(this.baseUrl + '/question', question ,{ headers: headers })
      .toPromise().then(response => response.json() as Question)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}