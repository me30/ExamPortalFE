import { User } from '../_models/user';
import { Injectable } from '@angular/core';
import { RequestOptions, Http, Headers } from '@angular/http';
import { Exam } from '../_models/exam';
import { UserService } from './user.service';
import { ExamsAssign } from '../_models/examsassign';

@Injectable()
export class ExamService {
  private baseUrl = 'http://localhost:8080';
  user: User;
  exam: Exam;
  selectedExam: Exam;

  headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
  options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http,
              private userService: UserService) { }
 
   createExam(exam: Exam): Promise<Exam> {
    const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.userService.token
      });
    exam.createdBy = this.userService.user;
    exam.createdDate = Date.now();
    return this.http.post(this.baseUrl + '/exam', exam,{ headers: headers })
      .toPromise().then(response => this.exam = response.json() as Exam)
      .catch(this.handleError);
  }

  getExams(): Promise<Exam[]> {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.userService.token
    });
    return this.http.get(this.baseUrl + '/exam/findAll',{ headers: headers })
      .toPromise()
      .then(response => response.json() as Exam[])
      .catch(this.handleError);
  }

  getExamById(id: number) {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.userService.token
    });
    return this.http.get(this.baseUrl + '/exam/' + id,{ headers: headers })
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

  //Store Selected exam for questions
  addExam(exam: Exam){
    return this.selectedExam = exam;
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}