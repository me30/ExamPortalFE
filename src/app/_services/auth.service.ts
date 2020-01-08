import { User } from '../_models/user';
import { Injectable } from '@angular/core';
import { RequestOptions, Http, Headers } from '@angular/http';
import { LoginRequest } from '../_payload/loginRequest';
import { JwtAuthenticationResponse } from '../_payload/jwtAuthenticationResponse';
import { SignupRequest } from '../_payload/signupRequest';
import { ForgotPasswordRequest } from '../_payload/forgotPasswordRequest';
import { ResetPasswordRequest } from '../_payload/resetPasswordRequest';

@Injectable()
export class AuthService {
  private baseUrl = 'http://localhost:8080';
  user: User;

  headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
  options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  login(userData: LoginRequest): Promise<JwtAuthenticationResponse> {
    return this.http.post(this.baseUrl + '/signin', userData)
      .toPromise()
      .then(response => response.json() as JwtAuthenticationResponse);
  }

  createUser(userData: SignupRequest) {
    return this.http.post(this.baseUrl + '/signup', userData)
      .toPromise().then(response => response)
      .catch(this.handleError);
  }

  forgotpassword(useremail: ForgotPasswordRequest): Promise<any> {
    return this.http.post(this.baseUrl + '/forgotpassword', useremail)
      .toPromise()
      .catch(this.handleError);
  }

  resetpassword(data: ResetPasswordRequest): Promise<void> {
    return this.http.post(this.baseUrl + '/reset', data)
      .toPromise().then(response => response)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}