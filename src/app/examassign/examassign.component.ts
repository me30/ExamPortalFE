import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { ExamService } from '../_services/exam.service';

@Component({
    selector: 'app-examassign',
    templateUrl: './examassign.component.html',
    styleUrls: ['./examassign.component.css']
})
export class ExamassignComponent implements OnInit {

    examassign: FormGroup;
    loading = false;
    submitted = false;
    users$;
    exams$;
    selected: number = 0;
    constructor(private formBuilder: FormBuilder,
        private userService: UserService,
        private examService: ExamService,
        private router: Router
    ) { }

    selectOption(id: number) {
        //getted from event
        console.log(id);
      }

    getUsers() {
        return this.userService.getusers();
    }

    getExams() {
        return this.examService.getExams();
    }

    ngOnInit() {
        this.examassign = this.formBuilder.group({
            assignTo: ['', Validators.required],
            description: ['', Validators.required],
            exam: ['', Validators.required]
        });
        this.users$ = this.getUsers();
        this.exams$ = this.getExams();
    }

    // convenience getter for easy access to form fields
    get f() { return this.examassign.controls; }

    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.examassign.invalid) {
            return;
        }

        this.loading = true;

        this.userService.getUserById(this.users$)
        .then(
            data => {
                // this.router.navigate(['/#']);
                console.log(data);
            },
            error => {
                this.loading = false;
            });
       
        this.examService.examAssign(this.examassign.value)
            .then(
                data => {
                    this.router.navigate(['/#']);
                },
                error => {
                    this.loading = false;
                });

    }
}