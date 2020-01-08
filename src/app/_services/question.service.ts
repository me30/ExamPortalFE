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
    question.exam = this.examService.exam;
    return this.http.post(this.baseUrl + '/question', question ,{ headers: headers })
      .toPromise().then(response => response.json() as Question)
      .catch(this.handleError);
  }

  getExams(): Promise<Exam[]> {
    return this.http.get(this.baseUrl + '/exam/findAll')
      .toPromise()
      .then(response => response.json() as Exam[])
      .catch(this.handleError);
  }

  getExamById(id: number) {
    return this.http.get(this.baseUrl + '/exam/' + id)
      .toPromise()
      .then(response =>  response.json() as Exam)
      .catch(this.handleError);
  }

  examAssign(examAssign: ExamsAssign): Promise<Exam> {
    examAssign.assignBy = this.user;
    examAssign.dateOfAssign = Date.now();
    return this.http.post(this.baseUrl + '/examAssign', examAssign)
      .toPromise().then(response => response.json() as User)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}