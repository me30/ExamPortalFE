import { User } from '../_models/user';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class UserProfileService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient,
    private userService: UserService) { }

    httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.userService.token
      })
    };

  uploadFile(file: File, user: User): Observable<any> {
    let url = this.baseUrl + "/userprofile/upload/" + user.id;
    const formdata: FormData = new FormData();
    formdata.append('file', file);
    return this.http.post<any>(url, formdata, this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  uploadFileInServer(file: File, user): Observable<any> {
    let url = this.baseUrl + "/userprofile/server";
    const formdata: FormData = new FormData();
    formdata.append('file', file);
    formdata.append('user', user);
    return this.http.post(url, formdata, this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  getUserProfileById(id: number) {
    return this.http.get(this.baseUrl + '/userprofile/getFileFromServer/' + id, this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}