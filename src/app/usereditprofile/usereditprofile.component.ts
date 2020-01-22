import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { UserService } from '../_services/user.service';
import { RoleName } from '../_models/role';
import { Location } from '@angular/common';

@Component({
    selector: 'app-usereditprofile',
    templateUrl: './usereditprofile.component.html',
    styleUrls: ['./usereditprofile.component.css']
})
export class UsereditprofileComponent implements OnInit {
    profileUserForm: FormGroup;
    loading = false;
    submitted = false;
    user: any;
    mySubscription: any;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService,
        private location: Location,
        private route: ActivatedRoute
    ) {
        // code for refresh side menu..........
        // this.router.routeReuseStrategy.shouldReuseRoute = function(){
        //     return false;
        //   };
         
    }

    ngOnInit() {
        this.profileUserForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            userName: ['', Validators.required],
            email: ['', Validators.required],
            gender: ['', Validators.required],
            dob: ['', Validators.required],
        });
        this.initForm();
    }

    // convenience getter for easy access to form fields
    get f() { return this.profileUserForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.profileUserForm.invalid) {
            return;
        }

        this.loading = true;
        this.userService.updateProfile(this.profileUserForm.value)
            .then(
                data => {
                    if (data.role === RoleName.Admin) {
                        this.router.navigateByUrl('/menu',{ skipLocationChange: true }).then(() => {
                            this.router.navigate(['/admin']);
                        });
                    } else {
                        this.router.navigateByUrl('/menu', { skipLocationChange: true }).then(() => {
                            this.router.navigate(['/'])
                        });
                    }
                },
                error => {
                    this.loading = false;
                });
    }

    private initForm() {
        let firstName = '';
        let lastName = '';
        let userName = '';
        let email = '';
        let gender = '';
        let dob;
        let id;
        let role = '';

        const user = this.userService.user;
        id = user.id
        firstName = user.firstName;
        lastName = user.lastName;
        userName = user.userName;
        email = user.email;
        gender = user.gender;
        dob = user.dob;
        role = user.role;

        this.profileUserForm = new FormGroup({
            'id': new FormControl(id),
            'firstName': new FormControl(firstName, Validators.required),
            'lastName': new FormControl(lastName, Validators.required),
            'userName': new FormControl(userName, Validators.required),
            'email': new FormControl(email, Validators.required),
            'gender': new FormControl(gender, Validators.required),
            'dob': new FormControl(dob, Validators.required),
            'role': new FormControl(role)
        });
    }

    deactivate(): void {
       this.router = null;
      }

}
