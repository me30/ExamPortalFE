import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../_services/user.service';
import { User } from '../_models/user';
import { UserProfileService } from '../_services/userProfile.service';

@Component({
    selector: 'app-edituser',
    templateUrl: './edituser.component.html',
    styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
    editUserForm: FormGroup;
    loading = false;
    submitted = false;
    user_id: number;
    user: User;
    
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private userService: UserService
    ) { }

    ngOnInit() {
        this.user_id = +this.route.snapshot.paramMap.get('id');

        this.editUserForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.required],
            gender: ['', Validators.required],
            dob: ['', Validators.required]
        });
        this.initForm();
    }

    // convenience getter for easy access to form fields
    get f() { return this.editUserForm.controls; }


    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.editUserForm.invalid) {
            return;
        }

        this.loading = true;
        this.userService.updateUser(this.editUserForm.value)
            .then(
                data => {  
                    this.router.navigate(['/admin']);
                },
                error => {
                    this.loading = false;
                });

    }

    private initForm() {
        this.userService.getUserById(this.user_id).then(data => {
            if (data != null) {
                this.editUserForm = new FormGroup({
                    'id': new FormControl(data.id),
                    'firstName': new FormControl(data.firstName, Validators.required),
                    'lastName': new FormControl(data.lastName, Validators.required),
                    'email': new FormControl(data.email, Validators.required),
                    'gender': new FormControl(data.gender, Validators.required),
                    'dob': new FormControl(data.dob, Validators.required),
                    'role': new FormControl(data.role)
                });
            }
        });
    }
}
