import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { PassWordValidator } from './password.validator';
import { UserService } from '../_services/user.service';
import { RoleName } from '../_models/role';


@Component({
  selector: 'app-change-user-password',
  templateUrl: './change-user-password.component.html',
  styleUrls: ['./change-user-password.component.css']
})
export class ChangeUserPasswordComponent implements OnInit {
  resetForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  user: any;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService) {

  }

  ngOnInit() {
    this.resetForm = this.formBuilder.group({
      newpassword: ['', Validators.required],
      confirmPwd: ['', Validators.required]
    }, {
        validator: PassWordValidator.matchPwds
      });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.resetForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.resetForm.invalid) {
      return;
    }
    this.loading = true;
    this.userService.changePassword(this.resetForm.value).then(
      data => {
        if (data != null) {
          if (this.userService.user.role === RoleName.Admin) {
            //set data in session 
            // sessionStorage.setItem('loggedUser', data.userName);
            // sessionStorage.setItem('loggedUserRole', data.role.name);
            this.router.navigate(['/admin']);
          } else {
            // sessionStorage.setItem('loggedUser', data.userName);
            // sessionStorage.setItem('loggedUserRole', data.role.name);
            this.router.navigate(['/user/dashboard']);
          }
        }
      },
      error => {
        this.loading = false;
      });
  }


}
