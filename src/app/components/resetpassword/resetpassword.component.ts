import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PassWordValidator } from './password.validator';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  resetForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  token: string;
  user : any;
  
  constructor( private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService) {

    }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
    })
    
    this.resetForm = this.formBuilder.group({
      password: ['', Validators.required],
      confirmPwd: ['', Validators.required],
      token: [this.token, Validators.required]
    },{
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
    this.authService.resetpassword(this.resetForm.value).subscribe(
            data => {
              this.router.navigate(['/login']);           
            },
            error => {
                this.loading = false;
            });
}

}
