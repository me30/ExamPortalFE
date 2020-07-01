import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { AuthService } from '../_services/auth.service';
import { RoleName } from '../_models/role';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  genders: string[] = ['Male', 'Female'];
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private userService: UserService,
      private authService: AuthService
  ) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          email: ['', Validators.required],
          password: ['', Validators.required],
          confirmPwd: ['', Validators.required]
      }, {
              passwordMatchValidator
          });
  }

  get isAdmin() {
      return this.userService.user && this.userService.user.role === RoleName.Admin;
  }

  get isUser() {
      return this.userService.user && this.userService.user.role === RoleName.User;
  }

  passwordErrorMatcher = {
      isErrorState: (control: FormControl, form: FormGroupDirective): boolean => {
          const controlInvalid = control.touched && control.invalid;
          const formInvalid = control.touched && this.registerForm.get('confirmPwd').touched && this.registerForm.invalid;
          return controlInvalid || formInvalid;
      }
  }

  confirmErrorMatcher = {
      isErrorState: (control: FormControl, form: FormGroupDirective): boolean => {
          const controlInvalid = control.touched && control.invalid;
          const formInvalid = control.touched && this.registerForm.get('password').touched && this.registerForm.invalid;
          return controlInvalid || formInvalid;
      }
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      this.loading = true;
      this.authService.createUser(this.registerForm.value)
          .then(
              response => {   
                  console.log(response);             
                  if(response._body === "Email Address already in use!"){
                    window.confirm('Email Address already in use! Please try with another Email Address.');
                    this.router.navigate(['/']);  
                }else{
                   this.router.navigate(['/']);
                  }
              },
              error => {
                  this.loading = false;
              });
  }
}
function passwordMatchValidator(g: FormGroup) {
  const password = g.get('password').value;
  const confirm = g.get('confirm').value
  return password === confirm ? null : { mismatch: true };
}
