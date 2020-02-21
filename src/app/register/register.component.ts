import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { RoleName } from '../_models/role';
import { AuthService } from '../_services/auth.service';
import { UserProfileService } from '../_services/userProfile.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    genders: string[] = ['Male', 'Female'];
    registerForm: FormGroup;
    loading = false;
    submitted = false;
    selectedFiles: FileList;  
    currentFileUpload: File;  
    
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService,
        private authService: AuthService,
        private userProfileService: UserProfileService
    ) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            userName: ['', Validators.required],
            password: ['', Validators.required],
            email: ['', Validators.required],
            gender: ['', Validators.required],
            dob: ['', Validators.required]
        });
    }

    get isAdmin() {
        return this.userService.user && this.userService.user.role === RoleName.Admin;
    }

    get isUser() {
        return this.userService.user && this.userService.user.role === RoleName.User;
    }

    selectFile(event){
        this.selectedFiles = event.target.files;  
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
                data => {
                    this.currentFileUpload = this.selectedFiles.item(0);  
                    this.userProfileService.uploadFile(this.currentFileUpload ,this.registerForm.value)
                    .then(data => data);
                    this.router.navigate(['/admin']);
                },
                error => {
                    this.loading = false;
                });
    }

}
