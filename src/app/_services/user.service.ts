import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from "@angular/http";
import { User } from '../_models/user';
import { RoleName } from '../_models/role';
import { Exam } from '../_models/exam';
import { ExamsAssign } from '../_models/examsassign';
import { LoginRequest } from '../_payload/loginRequest';
import { ForgotPasswordRequest } from '../_payload/forgotPasswordRequest';
import { ResetPasswordRequest } from '../_payload/resetPasswordRequest';
import { SignupRequest } from '../_payload/signupRequest';
import { UpdateUserPasswordRequest } from '../_payload/updateUserPasswordRequest';


@Injectable()
export class UserService {
  private baseUrl = 'http://localhost:8080';
  user: User;
  token: String;
  headers = new Headers({'Content-Type': 'application/json'});
  options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) {
    this.user = JSON.parse(sessionStorage.getItem('user'));
    this.token = JSON.parse(sessionStorage.getItem('token'));
   }

  getUserById(id: number): Promise<User>{
    const headers = new Headers({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.get(this.baseUrl + '/user/' + id,{ headers: headers })
      .toPromise()
      .then(response => response.json() as User);
  }

  getUserbyToken(token : String): Promise<User> {
    this.token = token;
    sessionStorage.setItem('token', JSON.stringify(token));
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.get(this.baseUrl + '/user/find/',{ headers: headers })
      .toPromise()
      .then(response => this.user = response.json() as User);
  }

  getusers(): Promise<User[]> {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.get(this.baseUrl + '/user/findAll',{ headers: headers })
      .toPromise()
      .then(response => response.json() as User[]);
  }

  getOnlyUsers(): Promise<User[]> {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.get(this.baseUrl + '/user/getOnlyUsres',{ headers: headers })
      .toPromise()
      .then(response => response.json() as User[]);
  }

  updateUser(userData: User) {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    });
    if (userData.role ===  RoleName.Admin) {
      userData.role = RoleName.Admin;
    } else {
      userData.role = RoleName.User;
    }
    return this.http.put(this.baseUrl + '/user',userData,{ headers: headers })
      .toPromise()
      .then(response => response)
      .catch(this.handleError);
  }

  updateProfile(userData: User): Promise<User> {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    });
    if (userData.role ===  RoleName.Admin) {
      userData.role = RoleName.Admin;
    } else {
      userData.role = RoleName.User;
    }
    return this.http.put(this.baseUrl + '/user/editProfile',userData,{ headers: headers })
      .toPromise()
      .then(response => this.user = response.json() as User)
      .catch(this.handleError);
  }

  changePassword(data: UpdateUserPasswordRequest){
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.post(this.baseUrl + '/user/changepassword', data,{ headers: headers })
      .toPromise().then(response => response)
      .catch(this.handleError);
  }

  deleteUser(user: User) {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.delete(this.baseUrl + '/user/' + user.id,{ headers: headers })
      .toPromise()
      .then(response => response)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}