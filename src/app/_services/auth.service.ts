import { User } from '../_models/user';
import { Injectable } from '@angular/core';
import { RequestOptions, Http, Headers } from '@angular/http';
import { LoginRequest } from '../_payload/loginRequest';
import { JwtAuthenticationResponse } from '../_payload/jwtAuthenticationResponse';
import { SignupRequest } from '../_payload/signupRequest';
import { ForgotPasswordRequest } from '../_payload/forgotPasswordRequest';
import { ResetPasswordRequest } from '../_payload/resetPasswordRequest';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';  
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080';
  user: User;

  _userActionOccured: Subject<void> = new Subject();
  get userActionOccured(): Observable<void> { return this._userActionOccured.asObservable() };

  constructor(private http: HttpClient,
    private userService: UserService,
    private router: Router) { }

  login(userData: LoginRequest): Observable<JwtAuthenticationResponse> {
    return this.http.post(this.baseUrl + '/signin', userData)
    .pipe(catchError(this.handleError));
  }

  createUser(userData: SignupRequest): Observable<any>{
    return this.http.post<any>(this.baseUrl + '/signup', userData)
    .pipe(catchError(this.handleError));
  }

  forgotpassword(useremail: ForgotPasswordRequest): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/forgotpassword', useremail)
    .pipe(catchError(this.handleError));
  }

  resetpassword(data: ResetPasswordRequest): Observable<void> {
    return this.http.post<void>(this.baseUrl + '/reset', data)
    .pipe(catchError(this.handleError));
  }

  notifyUserAction() {
    this._userActionOccured.next();
  }

  isLoggedIn() {   
  
    // create an instance of JwtHelper class.  
    let jwtHelper = new JwtHelperService();  
  
    // get the token from the localStorage as we have to work on this token.  
    let token = sessionStorage.getItem('token')  
  
    // check whether if token have something or it is null.  
    if(!token)  
    {  
      return false;  
    }  
  
    // get the Expiration date of the token by calling getTokenExpirationDate(String) method of JwtHelper class. this method accepts a string value which is nothing but a token.  
    if(token)  
    {  
      let expirationDate = jwtHelper.getTokenExpirationDate(token);  
  
      // check whether the token is expired or not by calling isTokenExpired() method of JwtHelper class.  
      let isExpired = jwtHelper.isTokenExpired(token);  
  
      return !isExpired;      
    }     
  }  

  logout() {
    sessionStorage.removeItem("user");
    this.userService.user = null;
    this.router.navigate(['/login']);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
  
}