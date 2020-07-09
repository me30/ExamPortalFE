import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { AuthService } from '../_services/auth.service';
import { RoleName } from '../_models/role';
import { CookieService } from 'ngx-cookie-service';

@Component({selector: 'app-login',templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';
    public Formdata: any = {};

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService,
        private authService: AuthService,
        private _cookieService: CookieService
    ) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            usernameOrEmail: ['', Validators.required],
            password: ['', Validators.required]
        });

        if (this._cookieService.get('remember')) {
            this.Formdata.username = this._cookieService.get('username');
            this.Formdata.password = this._cookieService.get('password');
            this.Formdata.rememberme = this._cookieService.get('remember');
          }

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    getCookie() {
        if (this.Formdata.rememberme != false) {
          this._cookieService.set('username', this.Formdata.username);
          this._cookieService.set('password', this.Formdata.password);
          this._cookieService.set('remember', this.Formdata.rememberme);
        } else {
          this._cookieService.deleteAll();
        }
      }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authService.login(this.loginForm.value)
            .subscribe(
                data => {
                    if(data != null){
                        this.getUserInfobyLogin(data.accessToken);
                    }               
                },
                error => {
                    this.loading = false;
                    window.confirm('Password not matched! Please enter correct paasword');
                });
    }

    private getUserInfobyLogin(token) {
     this.userService.getUserbyToken(token)  
     .subscribe(
        data => {
            if(data != null){
                if(data.role === RoleName.Admin){
                    //set data in session 
                    sessionStorage.setItem('user', JSON.stringify(data));
                    // sessionStorage.setItem('loggedUserRole', data.role.name);
                    this.router.navigate(['/admin']);
                }else{
                    sessionStorage.setItem('user', JSON.stringify(data));
                // sessionStorage.setItem('loggedUserRole', data.role.name);
                 this.router.navigate(['/dashboard']);
                }
            }               
        },
        error => {
            this.loading = false;
            window.confirm('Password not matched! Please enter correct paasword');
        });
    }
}