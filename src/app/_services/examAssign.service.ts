import { User } from '../_models/user';
import { Injectable } from '@angular/core';
import { RequestOptions, Http, Headers } from '@angular/http';
import { Exam } from '../_models/exam';
import { UserService } from './user.service';
import { ExamsAssign } from '../_models/examsassign';

@Injectable()
export class ExamAssignService {
  private baseUrl = 'http://localhost:8080';
  user: User;
  exam: Exam;
  selectedExam: Exam;

  headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
  options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http,
              private userService: UserService) { }
 
  examAssign(examAssign: ExamsAssign): Promise<ExamsAssign> {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.userService.token
    });
    return this.http.post(this.baseUrl + '/examAssign', examAssign,{ headers: headers })
      .toPromise().then(response => response.json() as ExamsAssign)
      .catch(this.handleError);
  }


  getExamAssignByUserId(user: User): Promise<ExamsAssign[]> {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.userService.token
    });
    return this.http.get(this.baseUrl + '/examAssign/getUsers/'+ user.id,{ headers: headers })
      .toPromise().then(response => response.json() as ExamsAssign)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}