import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { AuthService } from '../_services/auth.service';
import { RoleName } from '../_models/role';

@Component({selector: 'app-login',templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService,
        private authService: AuthService
    ) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            usernameOrEmail: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
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
            .then(
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
     .then(
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
                 this.router.navigate(['/userPage']);
                }
            }               
        },
        error => {
            this.loading = false;
            window.confirm('Password not matched! Please enter correct paasword');
        });
     
       
    }
    
}