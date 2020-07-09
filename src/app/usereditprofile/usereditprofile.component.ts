import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, NavigationEnd, RouterEvent } from '@angular/router';
import { UserService } from '../_services/user.service';
import { RoleName } from '../_models/role';
import { Location } from '@angular/common';
import { filter } from 'rxjs/operators';
import { MatDialogRef } from '@angular/material';
import { UserProfileService } from '../_services/userProfile.service';

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
    selectedFiles: FileList;
    currentFileUpload: File;
    url : any = '';
    gender: string[] = ['Male', 'Female'];
    currentSelectedGender: string;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService,
        private userProfileService: UserProfileService,
        // Used in modal for close()
        public dialogRef: MatDialogRef<UsereditprofileComponent>,
    ) { }

    ngOnInit() {
        this.currentSelectedGender = this.gender[0];
        this.profileUserForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.required],
            gender: ['', Validators.required],
            dob: ['', Validators.required],
        });
        this.initForm();
        this.router.events.pipe(
            filter((event: RouterEvent) => event instanceof NavigationEnd)
        ).subscribe(() => {

        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.profileUserForm.controls; }

    selectFile(event) {
        this.selectedFiles = event.target.files;
        if (event.target.files && event.target.files[0]) {
            const fileReader: FileReader = new FileReader();

            fileReader.readAsDataURL(event.target.files[0]); // read file as data url

            fileReader.onload = (event: Event) => {
                this.url = fileReader.result; // This is valid
             };
        }
    }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.profileUserForm.invalid) {
            return;
        }

        this.loading = true;
        this.userService.updateProfile(this.profileUserForm.value)
            .subscribe(
                data => {
                    if (this.selectedFiles && this.selectedFiles.length > 0){
                        this.currentFileUpload = this.selectedFiles.item(0);
                        this.userProfileService.uploadFile(this.currentFileUpload, this.userService.user)
                            .subscribe(profile => {
                                if (data.role === RoleName.Admin) {
                                    this.router.navigateByUrl('/menu', { skipLocationChange: false }).then(() => {
                                        this.dialogRef.close();
                                        this.router.navigate(['/admin']);
                                    });
                                } else {
                                    this.router.navigateByUrl('/menu', { skipLocationChange: true }).then(() => {
                                        this.dialogRef.close();
                                        this.router.navigate(['/dashboard'])
                                    });
                                }
                            });
                    }else{
                    if (data.role === RoleName.Admin) {
                        this.router.navigateByUrl('/menu', { skipLocationChange: false }).then(() => {
                            this.dialogRef.close();
                            this.router.navigate(['/admin']);
                        });
                    } else {
                        this.router.navigateByUrl('/menu', { skipLocationChange: true }).then(() => {
                            this.dialogRef.close();
                            this.router.navigate(['/dashboard'])
                        });
                    }
                }
            },
                error => {
                    this.loading = false;
                });
    }

    private initForm() {
        let firstName = '';
        let lastName = '';
        let email = '';
        let gender = '';
        let dob;
        let id;
        let role = '';

        const user = this.userService.user;
        id = user.id
        firstName = user.firstName;
        lastName = user.lastName;
        email = user.email;
        gender = user.gender;
        dob = user.dob;
        role = user.role;

        this.profileUserForm = new FormGroup({
            'id': new FormControl(id),
            'firstName': new FormControl(firstName, Validators.required),
            'lastName': new FormControl(lastName, Validators.required),
            'email': new FormControl(email, Validators.required),
            'gender': new FormControl(gender, Validators.required),
            'dob': new FormControl(dob, Validators.required),
            'role': new FormControl(role)
        });
        if(gender == this.gender[0]){
            this.currentSelectedGender = this.gender[0];
        }else{
            this.currentSelectedGender = this.gender[1];
        }
    }

    deactivate(): void {
        this.router = null;
    }
}