import { Injectable } from '@angular/core';
import { Headers, Http } from "@angular/http";
import { User } from '../_models/user';
import { RoleName } from '../_models/role';
import { UpdateUserPasswordRequest } from '../_payload/updateUserPasswordRequest';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class UserService {
  private baseUrl = 'http://localhost:8080';
  user: User;
  token: String;

  constructor(private http: HttpClient,
    private router: Router) {
    this.user = JSON.parse(sessionStorage.getItem('user'));
    this.token = JSON.parse(sessionStorage.getItem('token'));
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    })
  };

  getUserById(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.token
      })
    };
    return this.http.get<any>(this.baseUrl + '/user/' + id, httpOptions)
    .pipe(catchError(this.handleError));
  }

  getUserbyToken(token: String): Observable<any> {
    this.token = token;
    sessionStorage.setItem('token', JSON.stringify(token));
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    };
    return this.http.get<any>(this.baseUrl + '/user/find/', httpOptions)
    .pipe(catchError(this.handleError));
  }

  getusers(): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/user/findAll', this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  getOnlyUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + '/user/getOnlyUsres', this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  getUserForExamAssign(id : number): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + '/user/getUserForExamAssign/'+ id, this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  updateUser(userData: User){
    if (userData.role === RoleName.Admin) {
      userData.role = RoleName.Admin;
    } else {
      userData.role = RoleName.User;
    }
    return this.http.put(this.baseUrl + '/user', userData, this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  updateProfile(userData: User): Observable<any> {
    if (userData.role === RoleName.Admin) {
      userData.role = RoleName.Admin;
    } else {
      userData.role = RoleName.User;
    }
    return this.http.put<any>(this.baseUrl + '/user/editProfile', userData, this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  changePassword(data: UpdateUserPasswordRequest) {
    return this.http.post(this.baseUrl + '/user/changepassword', data, this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  deleteUser(user: User) {
    return this.http.delete(this.baseUrl + '/user/' + user.id,this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}